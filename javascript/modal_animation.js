// [수정 1] DOMContentLoaded 이벤트 리스너로 전체 코드를 감싸줍니다.
// 이렇게 하면 HTML 문서가 완전히 로드된 후에 JavaScript 코드가 실행되어,
// 요소를 찾지 못하는 문제를 100% 방지할 수 있습니다.
document.addEventListener('DOMContentLoaded', () => {

    // 1. 각 프로젝트에 대한 상세 정보를 객체 형태로 저장합니다.
    const projectData = {
      lfp: {
        title: "LFP Platform",
        tech: "React / Node.js / JavaScript",
        imageSrc: "assets/LFP.png",
        description: `
          <p>LFP (Life Financial platform) - 인생재무설계 플랫폼</p>
          <p>주요 기능: 투자 재산 예측, 재무 계획에 따른 자산 흐름 예측</p>
          <p>사용 기술: React, Node.js, JavaScript, docker, Python </p>
        `,
        link: "https://github.com/AirWolve/lfp",
      },
      caravan: {
        title: "Caravan Research",
        tech: "React / Node.js",
        imageSrc: "assets/caravan.png",
        description: `
        <p>Caravan Research - 비영리 연구 단체</p>
        <p>주요 활동: 매달 프로젝트 건의 및 투표 후 채택</p>
        <p>채택된 프로젝트들에 소속되어 연구 진행</p>
        <p>사용 기술: React, JSON, JavaScript, cloudflare, Node.js </p>
        `,
        link: "https://caravan.us.org",
      },
      Club: {
        title: "LAMBDA union Club",
        tech: "HTML / CSS / JavaScript",
        imageSrc: "assets/lambda.png",
        description: `
        <p>LAMBDA - 인천글로벌캠퍼스 연합 토이 프로젝트 동아리</p>
        <p>주요 활동: 1년간 동아리 회장 및 프로젝트 매니징 활동</p>
        <p>총 13개의 프로젝트 중 70%의 프로젝트 완성</p>
        <p>사용 기술: HTML / CSS / JavaScript</p>
        `,
        link: "https://mellene.github.io/lambda/index.html",
        
      },
      ifn: {
        title: "International Finance Network",
        tech: "HTML / CSS / JavaScript",
        imageSrc: "assets/ifn.png",
        description: `
        <p>IFN - 국제 경제 학회</p>
        <p>국제 경제 학회로써 각종 강연 및 경제관련 연구 진행을 하는 학회 단체</p>
        <p>사용 기술: HTML, CSS, JavaScript</p>
        `,
        link: "https://www.ifnsince24.com",
        
      },
      Dyslexia: { 
        title: "Dyslexia Platform",
        tech: "React / JavaScript / Node.js",
        imageSrc: "assets/Dylslexia.png",
        description: `
        <p>Dyslexia catcher - 난독증 환자를 위한 학습 보조 플랫폼</p>
        <p>난독증 환자들을 위한 증상 진단을 진행하고, 이를 통해 치료 수단 등을 제안</p>
        <p>사용 기술: React, JavaScript, Node.js </p>
        `,
        link: "https://github.com/shot-salmon/Dyslexia-Catcher",
        
      },
      SNN: {
        title: "Object Detection",
        tech: "Python / Pytorch / YOLOv8",
        imageSrc: "assets/Object_detection.png",
        description: `
        <p>Object-detection - YOLOv8 모델을 활용한 객체 탐지 연구</p>
        <p>한국의 대표적인 고속도로 CCTV를 활용하여 Object detection으로 막히는 시간대 분석</p>
        <p>사용 기술: Python, Pytorch, YOLOv8</p>`,
        
      },
      OTT: { // HTML에 맞춰 키 추가
          title: "OTT Platform",
          tech: "React / MySQL",
          imageSrc: "assets/OTT.png",
          description: `
          <p>OTT 서비스 - UI를 클론 코딩한 프로젝트</p>
          <p>주요 기능: 영화 검색, 영화 카테고리, 스트리밍 서비스</p>
          <p>사용 기술: React, MySQL, JavaScript</p>
          `,          
          link: 'https://github.com/dbsghrkd/cse316/tree/main'
      },
      PM: { // HTML에 맞춰 키 추가
          title: "Particulate Matter Research",
          tech: "Excel / Python",
          imageSrc: "assets/Tree_research.png",
          description: `
          <p>Particulate matter tree research - 미세먼지 저감 수종 관련된 데이터 분석 연구</p>
          <p>주요 내용: 각 지역별 조건에 맞는 미세먼지 저감 수종 추출 및 순위 도출</p>
          <p>사용 기술: Excel, Python</p>
          `,
          link: "https://doi.org/10.31224/4187",
      
      },
      insta: { // HTML에 맞춰 키 추가
          title: "Drug recognition Research",
          tech: "Spark AR / Figma",
          imageSrc: "assets/Drug_filter.png",
          description: `<p>AR 필터를 이용한 약물 인식 연구</p>
          <p>주요 내용: 약물 인식 필터 제작 및 사용성 테스트</p>
          <p>사용 기술: Spark AR, Figma</p>`,
      }
    };
    
    // 2. 필요한 DOM 요소들을 선택합니다.
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const modal = document.getElementById('project-modal');
    
    // 요소가 존재하는지 확인 후 다음 코드 실행 (안정성 강화)
    if (portfolioGrid && modal) {
      const modalImg = document.getElementById('modal-img');
      const modalTitle = document.getElementById('modal-title');
      const modalTech = document.getElementById('modal-tech');
      const modalDescription = document.getElementById('modal-description');
      const closeModalBtn = modal.querySelector('.modal-close-btn');
      const modalOverlay = modal.querySelector('.modal-overlay');
      const modalLink = document.getElementById('modal-link');
  
      // 3. 이벤트 리스너 설정
      portfolioGrid.addEventListener('click', (event) => {
          const portfolioItem = event.target.closest('.portfolio-item');
          if (!portfolioItem) return;
  
          const key = portfolioItem.dataset.projectKey;
          const data = projectData[key];
          
          // [수정 3] 데이터가 없을 경우를 대비해 콘솔에 로그를 남겨 디버깅을 돕습니다.
          if (data) {
            modalImg.src = data.imageSrc;
            modalTitle.textContent = data.title;
            modalTech.textContent = data.tech;
            modalDescription.innerHTML = data.description;
        
            // 링크가 존재할 경우에만 링크를 활성화하고 텍스트를 보여줍니다.
            if (data.link) {
                modalLink.href = data.link;
                modalLink.textContent = '프로젝트 보러가기 🚀'; // ✨ 링크에 표시될 텍스트
                modalLink.style.display = 'inline-block'; // 보이도록 설정
                modalLink.style.fontSize = '12px';
                modalLink.target = '_blank'; // 새 탭에서 열기 (보안 권장사항)
                modalLink.style.textDecoration = 'none'; // 밑줄 제거
                modalLink.rel = 'noopener noreferrer';
            } else {
                // 링크가 없는 프로젝트의 경우 링크를 숨깁니다.
                modalLink.style.display = 'none'; 
            }

            openModal();
      }});
  
      const openModal = () => {
          modal.classList.add('active');
          document.body.classList.add('modal-open');
      }
  
      const closeModal = () => {
          modal.classList.remove('active');
          document.body.classList.remove('modal-open');
      };
  
      closeModalBtn.addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', closeModal);
  
      window.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && modal.classList.contains('active')) {
              closeModal();
          }
      });
    }
  }); // DOMContentLoaded 리스너 닫기