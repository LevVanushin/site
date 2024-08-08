




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
        this.canvasElement = document.createElement("canvas");
        this.canvasElement.setAttribute("id", "canvas");
        this.btn.appendChild(this.canvasElement);

        this.canvasElement.setAttribute("width", this.btn.offsetWidth);
        this.canvasElement.setAttribute("height", String(this.btn.offsetHeight));

        this.ctx = this.canvasElement.getContext("2d");
    }

    getGradus(num){
        return (Math.PI/180) * num;
    }

    draw(){
        
        this.ctx.fillStyle = "white";


        this.ctx.moveTo(this.pos.left, this.pos.top);

        this.ctx.beginPath();

        
        this.ctx.arc(this.btn.offsetWidth, this.btn.offsetHeight, this.radius, 0, this.getGradus(90), true);
        this.ctx.fill();
        
    }

    hover(){
        this.mouseover = (e) => {
            if (e.type == 'mouseover'){
                let id = setInterval(() => {
                    if (this.radius <= 80){
                        console.log(1)
                        this.ctx.clearRect(0, 0, this.btn.offsetWidth, this.btn.offsetHeight)
                        this.ctx.arc(this.btn.offsetWidth, this.btn.offsetHeight, this.radius++, 0, this.getGradus(90), true);
                        this.ctx.fill();
                    }
                    else if(this.radius>80){
                        clearInterval(id);

                    }
                    
                }, 10);
            }
            
        }

        this.btn.addEventListener('mouseover', this.mouseover);
        
        this.btn.addEventListener('mouseout', this.mouseout)
        
    }
    
}

let btn = new ButtonFront("btn");
btn.draw();
btn.hover();