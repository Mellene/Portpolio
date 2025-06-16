document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // 클릭된 버튼에서 필터 값을 가져옴 (e.g., 'all', 'project')
        const filter = button.dataset.filter;

        // 모든 버튼에서 'active' 클래스 제거
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 클릭된 버튼에만 'active' 클래스 추가
        button.classList.add('active');

        // 모든 포트폴리오 아이템을 순회하며 필터링
        portfolioItems.forEach(item => {
          const itemCategory = item.dataset.category;

          // 필터가 'all'이거나 아이템의 카테고리가 필터와 일치하면
          if (filter === 'all' || itemCategory === filter) {
            item.style.display = 'block'; // 아이템을 보여줌
          } else {
            item.style.display = 'none';  // 아이템을 숨김
          }
        });
      });
    });
  });