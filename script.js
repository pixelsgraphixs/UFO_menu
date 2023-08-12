var icons = document.querySelectorAll(".icon");
var shadow = document.querySelector("#shadow");

icons.forEach(function(val,index){
    val.addEventListener("click", function(){
        dullAndBright();
        gsap.to("#shadow",{
            x: index*100,
            ease: Expo.easeInOut,
            duration: .4,
        })
        gsap.to(this.children,{
            opacity: 1,
        })
    })
})

function dullAndBright(){
    gsap.to(".icon i",{
        opacity: .4,
    })
}