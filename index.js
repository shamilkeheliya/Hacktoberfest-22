const summerSeason = document.getElementById("summer")
const winterSeason = document.getElementById("winter")
const autumnSeason = document.getElementById("autumn")
const springSeason = document.getElementById("spring")


//Summer
const summer = () => {
 document.querySelector(".main").style.backgroundColor = "rgb(244 165 18 / 74%)"

}
summerSeason.addEventListener("click", summer)


//Winter
const winter = () => {
  document.querySelector(".main").style.backgroundColor = "#FFC090"
  
}
winterSeason.addEventListener("click", winter)

//Autumn
const autumn = () => {
  document.querySelector(".main").style.backgroundColor = "#922e4a"

  
}
autumnSeason.addEventListener("click", autumn)

//Spring
const spring = () => {
  document.querySelector(".main").style.backgroundColor = "#A3C566"
  
}
springSeason.addEventListener("click", spring)


