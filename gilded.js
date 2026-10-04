/**
 * Project Showcase Slider for Gilded Slate & Gold Theme
 * Displays one project at a time with tab navigation and prev/next controls.
 */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.project-panel, .project-slide');
  const tabButtons = document.querySelectorAll('.project-pill-btn, .project-tab-btn');
  const prevBtn = document.getElementById('prevProjectBtn');
  const nextBtn = document.getElementById('nextProjectBtn');
  const counter = document.getElementById('projectCounter');
  
  if (!slides.length) return;

  let currentIndex = 0;
  const totalProjects = slides.length;

  function showProject(index) {
    if (index < 0) index = totalProjects - 1;
    if (index >= totalProjects) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    tabButtons.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentIndex);
      tab.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
    });

    if (counter) {
      counter.textContent = `${currentIndex + 1} of ${totalProjects}`;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showProject(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showProject(currentIndex + 1);
    });
  }

  tabButtons.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      showProject(i);
    });
  });

  const showcase = document.querySelector('.showcase-wrapper');
  if (showcase) {
    showcase.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        showProject(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        showProject(currentIndex - 1);
      }
    });
  }

  showProject(0);
});
