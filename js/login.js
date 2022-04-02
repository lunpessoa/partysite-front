function getCurrentStore(){
  const roller = document.querySelector(".roller")
  const btnRoller = document.querySelector("#roller-btn")
  if(sessionStorage.getItem("loginScroll") == "true"){
    roller.classList.add("slideContainer")
    btnRoller.innerHTML = "Cadastrar"
  }
}
getCurrentStore()

function seeTime() {
  const nowHour = new Date().getHours()
  const bannerBefore = document.querySelector(".banner-before")
  console.log(nowHour)

  if (nowHour >= 18 || nowHour <= 6) {
    bannerBefore.style.animationName = "toLeft";
  } else {
    bannerBefore.style.animationName = "toRight";
  }
}
seeTime()

function rollerButton() {
  const btnRoller = document.querySelector("#roller-btn")
  const roller = document.querySelector(".roller")

  function slideContainer() {
    roller.classList.toggle("slideContainer")

    if (roller.classList.contains("slideContainer")) {
      sessionStorage.setItem("loginScroll", true);
      btnRoller.innerHTML = "Cadastrar"
    } else {
      sessionStorage.setItem("loginScroll", false);
      btnRoller.innerHTML = "Entrar"
    }
  }

  btnRoller.addEventListener("click", slideContainer)
}
rollerButton()