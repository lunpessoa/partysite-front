function configVideo(){
  const playButton = document.querySelector("#playbutton");
  const video = document.querySelector("video");
  
  function videoplay(){
    if(video.paused == true){
      video.play();
      playButton.firstChild.setAttribute("class", "fas fa-pause");
    }else{
     video.pause(); 
     playButton.firstChild.setAttribute("class", "fas fa-play");
    }
  }
  
  video.volume = 0.2;
  playButton.addEventListener("click", videoplay);
}
configVideo();

function hamburguerMenu(){
  const hamburguer = document.querySelector("#button-hamburguer")
  const navMenu = document.querySelector(".menu-nav")

  function openMenu(){
    navMenu.classList.toggle("active");
  }
  hamburguer.addEventListener("click", openMenu);
}
hamburguerMenu();

function menuScroll(){
  const hamburguer = document.querySelector(".hamburguer")
  const menu = document.querySelector(".menu-bg")

  function animaScroll(){
    const scrollY = window.pageYOffset
    if(scrollY > 200){
      menu.classList.add("color")
      hamburguer.style.backgroundColor = "transparent"
    }else{
      menu.classList.remove("color")
      hamburguer.style.backgroundColor = "#033F88"
    }
  }

  window.addEventListener("scroll", animaScroll);
}
menuScroll();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();