const target = document.querySelector("#typing-title");
      const text = "< Yunho Kang />";
      let i = 0;

      function typing() {
        // 타이핑할 글자가 남아있을 때만 실행
        if (i < text.length) {
          target.innerHTML += text[i++];
          setTimeout(typing, 150);
        }
      }
      
      // 애니메이션 시작
      typing();