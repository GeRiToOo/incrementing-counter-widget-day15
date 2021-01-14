const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const incrementingCounter = +counter.innerText;
    const increment = target / 200;

    if (incrementingCounter < target) {
      counter.innerText = `${Math.ceil(incrementingCounter + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
