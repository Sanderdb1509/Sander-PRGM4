import {Actor, CollisionType, GraphicsGroup, Vector, Random, Timer} from "excalibur";
import {Resources} from "./resources.js";


export class Pause extends Actor{
    engine;
    constructor() {
        super({
            width: Resources.Pausebuttonimage.width,
            height: Resources.Pausebuttonimage.height,
        });

        this.pos = new Vector(750, 590)
        this.scale = new Vector(0.5, 0.5);
        this.graphics.use(Resources.Pausebuttonimage.toSprite())
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