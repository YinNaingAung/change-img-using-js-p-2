let img = document.querySelector("img")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")


btn1.addEventListener('click',()=>{
    img.src = "payroll.webp"
})
btn2.addEventListener('click',()=>{
    img.src = "expenses.webp"
})
btn3.addEventListener('click',()=>{
    img.src = "payroll.webp "
})