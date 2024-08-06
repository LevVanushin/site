




// let createBtn = (id_button) => {
//     let btn = document.getElementById(id_button);
//     btn.moveTo(btn.style.x, btn.style.y);
//     return btn.arc(btn.style.width, btn.style.height, 42, 0, getGradus(90), true);
// }


class ButtonFront {
    constructor(btnId){
        this.btn = document.getElementById(btnId);
        this.radius = 42;
        this.pos = this.btn.getBoundingClientRect();
    }

    getGradus(num){
        return (Math.PI/180) * num;
    }

    draw(){
        
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.ctx.fillStyle = "white";


        this.ctx.moveTo(this.pos.left, this.pos.top);

        this.ctx.beginPath();

        
        this.ctx.arc(this.btn.offsetWidth, this.btn.offsetHeight, this.radius, 0, this.getGradus(90), true);
        this.ctx.fill();
    }
}

let btn = new ButtonFront("btn");
btn.draw();

let btn_second = new ButtonFront("btn2")
btn_second.draw();