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
          <p>LFP (Life Financial platform)</p>
          <p>Key Features: Investment Asset Forecasting, Asset Flow Projection Based on Financial Planning</p>
          <p>Skills: React, Node.js, JavaScript, docker, Python </p>
        `,
        link: "https://github.com/AirWolve/lfp",
      },
      caravan: {
        title: "Caravan Research",
        tech: "React / Node.js",
        imageSrc: "assets/caravan.png",
        description: `
        <p>Caravan Research - Nonprofit Research Organization</p>
        <p>Main Activities: Proposing and Voting on Monthly Projects</p>
        <p>Followed by Participation in Selected Research Projects</p>
        <p>Skills: React, JSON, JavaScript, cloudflare, Node.js </p>
        `,
        link: "https://caravan.us.org",
      },
      Club: {
        title: "LAMBDA union Club",
        tech: "HTML / CSS / JavaScript",
        imageSrc: "assets/lambda.png",
        description: `
        <p>LAMBDA – Incheon Global Campus Union Toy Project Club</p>
        <p>Main Activities: Served as Club President and Project Manager for one year.</p>
        <p>Completed 70% of a total of 13 projects during the term.</p>
        <p>Skills: HTML / CSS / JavaScript</p>
        `,
        link: "https://mellene.github.io/lambda/index.html",
        
      },
      ifn: {
        title: "International Finance Network",
        tech: "HTML / CSS / JavaScript",
        imageSrc: "assets/ifn.png",
        description: `
        <p>IFN - International Finance Network</p>
        <p>An international economics society that hosts various lectures and conducts research on economic topics.</p>
        <p>Skills: HTML, CSS, JavaScript</p>
        `,
        link: "https://www.ifnsince24.com",
        
      },
      Dyslexia: { 
        title: "Dyslexia Platform",
        tech: "React / JavaScript / Node.js",
        imageSrc: "assets/Dylslexia.png",
        description: `
        <p>Dyslexia Catcher – A Learning Support Platform for Individuals with Dyslexia</p>
        <p>Conducts symptom assessments for individuals with dyslexia and provides personalized recommendations for treatment and support methods.</p>
        <p>Skills: React, JavaScript, Node.js </p>
        `,
        link: "https://github.com/shot-salmon/Dyslexia-Catcher",
        
      },
      SNN: {
        title: "Object Detection",
        tech: "Python / Pytorch / YOLOv8",
        imageSrc: "assets/Object_detection.png",
        description: `
        <p>Object Detection – Research Using the YOLOv8 Model</p>
        <p>Analyzed traffic congestion patterns using object detection on footage from major highway CCTV systems in South Korea.</p>
        <p>Skills: Python, Pytorch, YOLOv8</p>`,
        
      },
      OTT: { // HTML에 맞춰 키 추가
          title: "OTT Platform",
          tech: "React / MySQL",
          imageSrc: "assets/OTT.png",
          description: `
          <p>OTT Service Platform - Project with Clone Coding</p>
          <p>Key Features: Movie Search, Genre-Based Browsing, Streaming Service Integration</p>
          <p>Skills: React, MySQL, JavaScript</p>
          `,          
          link: 'https://github.com/dbsghrkd/cse316/tree/main'
      },
      PM: { // HTML에 맞춰 키 추가
          title: "Particulate Matter Research",
          tech: "Excel / Python",
          imageSrc: "assets/Tree_research.png",
          description: `
          <p>Particulate Matter Tree Research – Data Analysis on Tree Species for Fine Dust Reduction</p>
          <p>Main Focus: Identifying and ranking tree species most effective at reducing particulate matter based on regional environmental conditions.</p>
          <p>Skills: Excel, Python</p>
          `,
          link: "https://doi.org/10.31224/4187",
      
      },
      insta: { // HTML에 맞춰 키 추가
          title: "Drug recognition Research",
          tech: "Spark AR / Figma",
          imageSrc: "assets/Drug_filter.png",
          description: `<p>Drug Awareness Research Using AR Filters</p>
          <p>Main Focus: Development of drug recognition AR filters and usability testing.</p>
          <p>Skills: Spark AR, Figma</p>`,
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