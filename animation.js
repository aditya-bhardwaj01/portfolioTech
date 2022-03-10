AOS.init({
    offset: 200,
    duration: 1000,
    once: true
  });
  
  document.querySelectorAll('img')
    .forEach((img) =>
        img.addEventListener('load', ()=>
          AOS.refresh()
        )
    );