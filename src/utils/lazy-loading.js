const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll('.lazy');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      let img = entry.target;
      if (entry.isIntersecting) {
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      } else {
        img.classList.add('loading');
        img.classList.remove('loaded');
      }
    });
  });

  lazyImgs.forEach(img => {
    observer.observe(img);
  });
};

export default lazyLoading;
