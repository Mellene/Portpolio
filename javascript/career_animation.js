document.addEventListener('DOMContentLoaded', () => {
    // 애니메이션을 적용할 전체 컨테이너
    const timelineContainer = document.querySelector('.activity-career-part');
    
    // 애니메이션을 적용할 모든 타임라인 아이템들
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    // 컨테이너나 아이템이 없으면 함수 종료
    if (!timelineContainer || timelineItems.length === 0) {
      return;
    }
  
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // entry.isIntersecting: 타겟 요소(timelineContainer)가 화면에 보이는지 여부
        if (entry.isIntersecting) {
          
          // 각 아이템에 대해 순차적으로 애니메이션 적용
          timelineItems.forEach((item, index) => {
            // index를 이용하여 0.5초(500ms) 간격으로 딜레이를 줌
            setTimeout(() => {
              item.classList.add('is-visible');
            }, index * 500); 
          });
  
          // 애니메이션이 한 번 실행된 후에는 더 이상 관찰하지 않음 (반복 실행 방지)
          observer.unobserve(timelineContainer);
        }
      });
    }, {
      threshold: 0.1 // 타겟 요소가 10% 보였을 때 콜백 함수 실행
    });
  
    // timelineContainer에 대한 관찰 시작
    observer.observe(timelineContainer);
  });