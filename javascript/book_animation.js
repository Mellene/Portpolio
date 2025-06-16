window.addEventListener('scroll', handleCardFlip);

function handleCardFlip() {
  // 애니메이션 컨테이너와 회전할 카드를 찾습니다.
  const container = document.querySelector('.intro-animation-container');
  const flippingCard = document.querySelector('.card-right');

  // 요소들이 없으면 함수를 종료합니다.
  if (!container || !flippingCard) return;

  // 컨테이너의 위치 정보를 가져옵니다.
  const rect = container.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // 애니메이션은 컨테이너가 뷰포트 상단에 닿거나 지나갔을 때 시작됩니다.
  // (rect.top <= 0)
  // 그리고 컨테이너의 끝이 뷰포트 하단에 닿기 전까지 지속됩니다.
  // (rect.bottom >= viewportHeight)
  if (rect.top <= 0 && rect.bottom >= viewportHeight) {
    // 컨테이너 내에서 애니메이션을 위해 스크롤할 수 있는 전체 거리
    const scrollableDistance = container.offsetHeight - viewportHeight;
    
    // 컨테이너 상단이 뷰포트 상단을 얼마나 지나쳤는지를 기반으로 진행률 계산
    // rect.top은 음수이므로 -를 붙여 양수로 만듭니다.
    const progress = -rect.top / scrollableDistance;

    // 진행률이 0~1 범위를 벗어나지 않도록 고정
    const clampedProgress = Math.max(0, Math.min(1, progress));

    // 진행률에 따라 회전 각도 계산
    const rotation = -180 * clampedProgress;
    
    // 실제 스타일에 적용
    flippingCard.style.transform = `rotateY(${rotation}deg)`;
  } else if (rect.top > 0) {
    // 컨테이너가 아직 상단에 닿기 전이면, 카드는 완전히 닫힌 상태 (0도)
    flippingCard.style.transform = `rotateY(0deg)`;
  } else {
    // 컨테이너가 완전히 지나가면, 카드는 완전히 열린 상태 (-180도)
    flippingCard.style.transform = `rotateY(-180deg)`;
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const scene = document.querySelector('.card-scene');
//   const card = document.querySelector('.card');
//   const container = document.querySelector('.intro-animation-container');

//   if (!scene || !card || !container) return;

//   // 1. 스크롤에 따라 뒤집기
//   window.addEventListener('scroll', handleCardFlip);
//   function handleCardFlip() {
//     const rect = container.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;
//     if (rect.top <= 0 && rect.bottom >= viewportHeight) {
//       const scrollableDistance = container.offsetHeight - viewportHeight;
//       const progress = -rect.top / scrollableDistance;
//       if (progress > 0.5) {
//         card.classList.add('is-flipped');
//       } else {
//         card.classList.remove('is-flipped');
//       }
//     }
//   }

//   // 2. 마우스 움직임에 따른 3D 회전
//   scene.addEventListener('mousemove', (e) => {
//     const rect = scene.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     const rotateY = (x / (rect.width / 2)) * 10;
//     const rotateX = (-y / (rect.height / 2)) * 10;
//     const baseTransform = card.classList.contains('is-flipped') ? 'rotateY(180deg)' : 'rotateY(0deg)';
//     card.style.transform = `${baseTransform} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     card.style.transition = 'transform 0.1s ease-out';
//   });

//   // 3. 마우스가 영역을 벗어났을 때 복귀
//   scene.addEventListener('mouseleave', () => {
//     card.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
//     if (card.classList.contains('is-flipped')) {
//       card.style.transform = 'rotateY(180deg)';
//     } else {
//       card.style.transform = 'rotateY(0deg) rotateX(0deg)';
//     }
//   });
// });