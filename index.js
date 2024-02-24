function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  let touchStartX = 0;
      let touchEndX = 0;
      let currentIndex = 0;

      function showSlide(index) {
          const slides = document.querySelector('.slides');
          slides.style.transform = `translateX(${index * -100}%)`;
          currentIndex = index;
      }

      function nextSlide() {
          currentIndex = (currentIndex + 1) % 2;
          showSlide(currentIndex);
          setActiveIndicator(currentIndex);
      }

      function prevSlide() {
          currentIndex = (currentIndex - 1 + 2) % 2;
          showSlide(currentIndex);
          setActiveIndicator(currentIndex);
      }

      function startTouch(event) {
          touchStartX = event.touches[0].clientX;
      }

      function moveTouch(event) {
          touchEndX = event.touches[0].clientX;
      }

      function endTouch() {
          if (touchStartX - touchEndX > 50) {
              nextSlide();
          } else if (touchEndX - touchStartX > 50) {
              prevSlide();
          }
      }

      function setActiveIndicator(index) {
          const indicators = document.querySelectorAll('.indicator');
          indicators.forEach((indicator, i) => {
              indicator.classList.toggle('bg-blue-500', i === index);
          });
      }