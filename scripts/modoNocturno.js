const querySwitch = document.querySelector(".switch")

querySwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark")

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true")
    document.getElementById("logoGifosDiurno").src = `assets/logo-mobile-modo-noct.svg`
    document.getElementById("switch").innerHTML = "Modo Diurno"
    document.getElementById("xdiurno").src = "assets/close-modo-noct.svg"
    document.getElementById("logoMenuHamburguesaDiurno").src = "assets/burger-modo-noct.svg"
    document.getElementById("search").src = "assets/icon-search-modo-noct.svg"
  } else {
    localStorage.setItem("dark-mode", "false")
    document.getElementById("logoGifosDiurno").src = `assets/logo-mobile.svg`
    document.getElementById("switch").innerHTML = "Modo Nocturno"
    document.getElementById("xdiurno").src = "assets/close.svg"
    document.getElementById("logoMenuHamburguesaDiurno").src = "assets/burger.svg"
    document.getElementById("search").src = "assets/icon-search.svg"
  }
})

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark")
  document.getElementById("logoGifosDiurno").src = `assets/logo-mobile-modo-noct.svg`
  document.getElementById("switch").innerHTML = "Modo Diurno"
  document.getElementById("xdiurno").src = "assets/close-modo-noct.svg"
  document.getElementById("logoMenuHamburguesaDiurno").src = "assets/burger-modo-noct.svg"
  document.getElementById("search").src = "assets/icon-search-modo-noct.svg"
} else {
  document.body.classList.remove("dark")
  document.getElementById("logoGifosDiurno").src = `assets/logo-mobile.svg`
  document.getElementById("switch").innerHTML = "Modo Nocturno"
  document.getElementById("xdiurno").src = "assets/close.svg"
  document.getElementById("logoMenuHamburguesaDiurno").src = "assets/burger.svg"
  document.getElementById("search").src = "assets/icon-search.svg"
}
