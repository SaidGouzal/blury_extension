const elements = document.getElementsByTagName("img");

setInterval(() => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.classList.add('blur');
  }
}, 1000);
