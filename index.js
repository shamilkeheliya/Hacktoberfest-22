const summerSeason = document.getElementById("summer")
const winterSeason = document.getElementById("winter")
const autumnSeason = document.getElementById("autumn")
const springSeason = document.getElementById("spring")


//Summer
const summer = () => {
 document.body.style.backgroundColor = "#EE9B01"
 document.body.style.color = "#C8D2D1"

}
summerSeason.addEventListener("click", summer)


//Winter
const winter = () => {
  document.body.style.backgroundColor = "#1f4b8e"
  document.body.style.color = "#f1ece6"
  
}
winterSeason.addEventListener("click", winter)

//Autumn
const autumn = () => {
  document.body.style.backgroundColor = "#283618"
  document.body.style.color = "#606c38"

  
}
autumnSeason.addEventListener("click", autumn)

//Spring
const spring = () => {
  document.body.style.backgroundColor = "#00b5a1"
  document.body.style.color = "#fe98ab"
  
}
springSeason.addEventListener("click", spring)


