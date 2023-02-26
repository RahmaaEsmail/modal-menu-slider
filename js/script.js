const toggle = document.getElementById("toggle");
const nav = document.querySelector("nav");
const openModal = document.getElementById("open");
const modalBox = document.getElementById("modal");
const closeModal = document.getElementById("close");
const body = document.getElementById("show-background");

toggle.addEventListener("click",()=>{
   document.body.classList.toggle("show");
})

openModal.addEventListener("click",()=>{
    modalBox.classList.add("show")
})

closeModal.addEventListener("click",()=>{
    modalBox.classList.remove("show")
})

document.addEventListener('click',e=>{
    e.target === modalBox ? modalBox.classList.remove("show") : ""
})