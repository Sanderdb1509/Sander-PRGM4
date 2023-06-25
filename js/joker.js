import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";

export class Joker extends Actor {
    constructor() {
        super({ width: Resources.Joker.width, height: Resources.Joker.height })
        this.isMovingUp = false;
        this.canClickUp = true;
        this.resetPositionX = -20; // De X-positie waarop de auto opnieuw verschijnt
        this.initialPosition = new Vector(1700, 170);
        this.vel = new Vector(-400, 0); // Snelheid verhoogd naar -20
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Joker.toSprite());
        this.pos = this.initialPosition.clone();
    }

    update(engine, delta) {
        super.update(engine, delta);

        // Controleer of de auto de resetpositie heeft bereikt
        if (this.pos.x <= this.resetPositionX) {
            this.pos = this.initialPosition.clone(); // Reset de positie van de auto
        }
    }
}
