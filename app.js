const div = document.querySelector(".img1")
div.addEventListener("click",function(){
      window.location.href = "./work/1.html"
})
const div2 = document.querySelector(".img2")
div2.addEventListener("click",function(){
      window.location.href = "./work/2.html"
})
const loader = document.getElementById("preloader")
window.addEventListener("load", function(){
      loader.style.display = "none"
})
