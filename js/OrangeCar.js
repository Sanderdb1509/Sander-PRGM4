import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";

export class OrangeCar extends Actor {
    constructor() {
        super({ width: Resources.OrangeCar.width, height: Resources.OrangeCar.height })
        this.isMovingUp = false;
        this.canClickUp = true;
        this.resetPositionX = -1000; // De X-positie waarop de auto opnieuw verschijnt
        this.initialPosition = new Vector(1600, 350);
        this.vel = new Vector(-600, 0); // Snelheid verhoogd naar -20
    }

    onInitialize(engine) {
        this.graphics.use(Resources.OrangeCar.toSprite());
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
