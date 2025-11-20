import { Toolbox } from "../toolbox.js";

export class Title {

    canvas;
    pencil;
    changeToGame = false;
    toolbox = new Toolbox();

    startButtonX = 300;
    startButtonY = 200;
    startButtonW = 100;
    startButtonH = 50;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;

        
        this.onKeyPressed = this.onKeyPressed.bind(this);
        this.onClicked = this.onClicked.bind(this);

        document.addEventListener("keypress", this.onKeyPressed )
        document.addEventListener("click", this.onClicked)
    }

    onKeyPressed() {
        this.changeToGame = true;
    }
    
    onClicked(event) {
        let isHitButton = this.toolbox.isWithinRect(
            event.offsetX, event.offsetY, 
            this.startButtonX, this.startButtonY, 
            this.startButtonW, this.startButtonH
        );
        this.changeToGame = isHitButton;
    }

    update() {
        this.pencil.fillStyle = "gray";
        this.pencil.font = "20px Georgia";
        this.pencil.fillText("Welcome to Escape room", 10, 50);

        this.pencil.fillStyle = "blue";
        this.pencil.fillRect(
            this.startButtonX, this.startButtonY,
            this.startButtonW, this.startButtonH
        );

        if(this.changeToGame) {
            this.changeToGame = false;
            return "game";
        }
    }


}