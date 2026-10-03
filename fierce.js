/**
 * Tal Avital - Portfolio Version 3.0 (Fierce Executive)
 * Interactive Showcase Tab Controller & Keyboard Navigation
 */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.project-panel');
  const tabButtons = document.querySelectorAll('.project-pill-btn');
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

    // Update panel active state
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    // Update tab button states
    tabButtons.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentIndex);
      tab.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
    });

    // Update numeric counter display
    if (counter) {
      counter.textContent = `${currentIndex + 1} of ${totalProjects}`;
    }
  }

  // Next / Previous click listeners
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

  // Direct Tab Selection click listeners
  tabButtons.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      showProject(i);
    });
  });

  // Global Keyboard Navigation (Arrow keys when tab container is focused)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    if (e.key === 'ArrowRight') {
      showProject(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      showProject(currentIndex - 1);
    }
  });

  // Initialize first project
  showProject(0);
});
