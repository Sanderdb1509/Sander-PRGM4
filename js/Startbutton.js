import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";


export class Start extends Actor{
    engine;
    constructor() {
        super({
            width: Resources.Startbuttonimage.width,
            height: Resources.Startbuttonimage.height,
        });

        this.pos = new Vector(650, 490)
        this.scale = new Vector(0.1, 0.1);
        this.graphics.use(Resources.Startbuttonimage.toSprite())
    }



    onInitialize(engine) {
        this.engine = engine;
        this.on('pointerup', () => {
            this.resetGame();
        });
    }

    resetGame() {
        this.engine.goToScene('level');
    }
}