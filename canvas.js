let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const getGradus = (num) => {
    return (Math.PI/180) * num;
}
let radius = 42;
ctx.fillStyle = "white";
ctx.arc(194, 60, radius, 0, getGradus(90), true);
ctx.fill();

let button = document.getElementById("btn");

button.addEventListener("mouseover", (e) => {
    console.log(1)
    if (e.type == "mouseover"){
        let timerId = setInterval(() => {
            console.log("Interval")
            if (radius >= 80){
                clearInterval(timerId)
                return 0;
            }
            else{
                clearPath()
                ctx.arc(194, 60, ++radius, 0, getGradus(90), true);
                ctx.fill()
            }
            
        }, 5)   
    console.log("+")
    }
    else console.log(1)
    
    
})
button.addEventListener("mouseout", (e) => {
    if (e.type == "mouseout"){
        let timerId = setInterval(() => {
            console.log("OUT")
            if (radius == 40){
                clearInterval(timerId)
                return 0;
            }
            else{
                ctx.arc(194, 60, --radius, 0, getGradus(90), true);
                ctx.fill()
            }
            
        }, 5) 
    }
})