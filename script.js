let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus-btn")
let minus_btn=document.getElementsByClassName("minus-btn")
let Quant=document.getElementsByClassName("Quant")
let finalPrice=document.getElementById("finalPrice")
let prices=[1379,176,249]
for(let i=0; i<heart_btn.length;i++){
//Heart Button
heart_btn[i].addEventListener("click",function(){
    if(heart_btn[i].style.color=="red"){
        heart_btn[i].style.color="black"
    }
    else{
        heart_btn[i].style.color="red"
    }
})
//Plus button
plus_btn[i].addEventListener("click",function(){
    Quant[i].value=Number(Quant[i].value)+1
    finalPrice.value=Number(finalPrice.value)+prices[i]
})
//Minus button
minus_btn[i].addEventListener("click",function(){
    if(Number(Quant[i].value)>0){
        Quant[i].value=Number(Quant[i].value)-1
        finalPrice.value=Number(finalPrice.value)-prices[i]
}
}) 
}