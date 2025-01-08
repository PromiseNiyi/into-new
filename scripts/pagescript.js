  const scrollContainer = document.getElementById('scrollContainer');
  const menuItems = document.querySelectorAll('.navigations li');
  const scrollbarThumb = document.getElementById('scrollbarThumb');

  // Update menu highlight based on visible section
  const updateMenuHighlight = () => {
    const sections = document.querySelectorAll('.section');
    let activeIndex = 0;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.left >= 0 && rect.left < window.innerWidth) {
        activeIndex = index;
      }
    });

    menuItems.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  // Update custom scrollbar thumb position
  const updateScrollbar = () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const thumbWidth = scrollbarThumb.offsetWidth;
    const maxLeft = document.querySelector('.custom-scrollbar').offsetWidth - thumbWidth;

    const left = (scrollLeft / scrollWidth) * maxLeft;
    scrollbarThumb.style.left = `${left}px`;
  };

  // Add responsiveness toggle
  const toggleScrollingMode = () => {
    const sections = document.querySelectorAll('.section');

    if (window.innerWidth <= 900) {
      // Disable custom scrollbar and snapping
      scrollContainer.style.overflowX = 'hidden';
      scrollContainer.style.scrollSnapType = 'none';
      document.querySelector('.custom-scrollbar').style.display = 'none';

      // Allow dynamic height for sections
      sections.forEach((section) => {
        section.style.height = 'auto'; // Remove fixed height
        section.style.minHeight = '100vh'; // Ensure minimum visibility
      });
    } else {
      // Enable custom scrollbar and horizontal snapping
      scrollContainer.style.overflowX = 'scroll';
      scrollContainer.style.scrollSnapType = 'x mandatory';
      document.querySelector('.custom-scrollbar').style.display = 'block';

      // Reset section height to horizontal mode
      sections.forEach((section) => {
        section.style.height = '100vh';
      });

      // Reapply initialization functions for desktop mode
      updateMenuHighlight();
      updateScrollbar();
    }
  };

  scrollContainer.addEventListener('scroll', () => {
    updateMenuHighlight();
    updateScrollbar();
  });

  window.addEventListener('resize', () => {
    toggleScrollingMode();
    // Reapply event listeners after resize
    sections.forEach((section) => {
      section.addEventListener('wheel', handleSectionScroll);
    });
  });

  // Add click event to menu items for navigation
  menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const sections = document.querySelectorAll('.section');
      sections[index].scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Handle vertical scrolling within sections
  const handleSectionScroll = (event) => {
    const section = event.currentTarget;
    if (event.deltaY > 0 && section.scrollTop + section.clientHeight >= section.scrollHeight) {
      const nextSection = section.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (event.deltaY < 0 && section.scrollTop === 0) {
      const prevSection = section.previousElementSibling;
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.addEventListener('wheel', handleSectionScroll);
  });

  // Initialize menu highlight and scrollbar
  updateMenuHighlight();
  updateScrollbar();
  toggleScrollingMode();

