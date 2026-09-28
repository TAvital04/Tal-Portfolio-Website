/**
 * Project Showcase Slider
 * Displays only one project at a time with tab navigation and prev/next controls.
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

    // Update slides
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    // Update tab buttons
    tabButtons.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentIndex);
      tab.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
    });

    // Update counter
    if (counter) {
      counter.textContent = `${currentIndex + 1} of ${totalProjects}`;
    }
  }

  // Next / Previous buttons
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

  // Tab buttons click
  tabButtons.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      showProject(i);
    });
  });

  // Keyboard navigation when focused on showcase
  const showcase = document.querySelector('.showcase-container');
  if (showcase) {
    showcase.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        showProject(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        showProject(currentIndex - 1);
      }
    });
  }

  // Initialize
  showProject(0);
});
