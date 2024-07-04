const headerPop = () => {
  const header = document.querySelector('.header');
  const pop = document.querySelector('.pop-nav')

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        pop.classList.remove('hide');
        pop.classList.add('pop');
      } else {
        pop.classList.add('hide');
        pop.classList.remove('pop');
      } 
    });
  },options);

    observer.observe(header);
};

const options = {
  threshold: 0,
};

export default headerPop;
