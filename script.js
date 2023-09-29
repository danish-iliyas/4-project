var card = document.querySelector("#card1")
var love =  document.querySelector("i")
var love2 = document.querySelector("#i1")
 var flag =0

love2.addEventListener("click" , function(){

    if(flag==0){
    console.log("hello")
    love2.style.color = "red"
    flag =1;
}
    else{
        love2.style.color = "white"
        flag=0
    }
})

card.addEventListener("dblclick" , function(){

//    if(flag==0) {
    love.style.opacity="1";
   
    love.style.color="red"
    // love2.style.backgroundcolor="red"
    setTimeout(function (){
        love.style.opacity="0";
    },600);
//     // flag =1;
// }else{
//     love.style.opacity="0";
//     // console.log("hello")
//     flag=0;

// }
if(flag==0){
    console.log("hello")
    love2.style.color = "red"
    flag =1;
}
    else{
        love2.style.color = "white"
        flag=0
    }
})

// ---------------------------------------------//
var project3 = document.querySelector("#proj3")
var curso =  document.querySelector("#cursor")
project3.addEventListener("mousemove" , function(e){
   curso.style.left = e.x+"px" 
   curso.style.top = e.y+"px"
   curso.style.opacity="1";
})
setTimeout(function (){
    curso.style.opacity="0";
},600)


// --------------------------------------------------//

// var elem1  = document.querySelector("#elem1")

var elemm = document.querySelectorAll(".element")
var img1 = document.querySelector("#ww img")

elemm.forEach(function(val) {
    // console.log(val)
   
val.addEventListener("mouseenter" , function(){
    console.log("helo")
   val
    val.childNodes[1].style.opacity = 1
    
})
val.addEventListener("mouseleave" , function(){
    console.log("leave")
    val.childNodes[1].style.opacity = 0
})
val.addEventListener("mousemove" , function(m){
    console.log("leave")
    val.childNodes[1].style.left = m.x+"px"
    // val.childNodes[1].style.top = m.y+"px"
})

})

// elemm.addEventListener("mousemove " , function(m){
//     // img.style.left = m.x+"px"
//     console.log(m.x)
// })


var arr = [
    {dp:"https://images.unsplash.com/photo-1693683197888-81eeadae982c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" , story:"https://images.unsplash.com/photo-1693683197888-81eeadae982c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},

    {dp:"https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" , story:"https://images.unsplash.com/photo-1695982207433-d5e11d6b2214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},

    {dp:"https://images.unsplash.com/photo-1693683197888-81eeadae982c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" , story:"https://images.unsplash.com/photo-1695982207433-d5e11d6b2214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {dp:"https://images.unsplash.com/photo-1693683197888-81eeadae982c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" , story:"https://images.unsplash.com/photo-1693683198442-e29256010ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},


]
var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem, idx){
    clutter +=`<div class="story" >
    <img id ="${idx}" src="${elem.dp}" alt="">
</div>`
 })
 stories.innerHTML =clutter
stories.addEventListener("click" , function(dets){
   document.querySelector("#full-screen").style.display ="block"
   document.querySelector("#full-screen").style.backgroundImage =`url( ${arr[dets.target.id].story})`
   setTimeout(function(){
    document.querySelector("#full-screen").style.display ="none"
   } , 2000)
})


