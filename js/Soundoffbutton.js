import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";
import {backgroundMusic } from "./startscherm.js"


export class Soundoff extends Actor{
    engine;
    constructor() {
        super({
            width: Resources.Soundoffbuttonimage.width,
            height: Resources.Soundoffbuttonimage.height,
        });

        this.pos = new Vector(750, 450)
        this.scale = new Vector(1.0, 1.0);
        this.graphics.use(Resources.Soundoffbuttonimage.toSprite())
    }



    onInitialize(engine) {
        this.engine = engine;
        this.on('pointerup', () => {
            if(backgroundMusic.isPlaying()) {
                backgroundMusic.stop();
            }
            else {
                backgroundMusic.play();
            }

        });
    }

}