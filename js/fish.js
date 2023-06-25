import { Actor, Vector, Input, vec } from "excalibur";
import { Resources } from "./resources.js";
import { Car } from "./Car.js";
import { Joker } from "./joker";
import { OrangeCar } from "./OrangeCar.js";
import {Hamburger} from "./hamburger.js";
import {Levenerbij} from "./Levenerbij.js";

export class Fish extends Actor {
    engine

    constructor() {
        super({width: Resources.Fish.width, height: Resources.Fish.height})
        this.isMovingUp = false;
        this.canClickUp = true;
        this.gravity = 9000; // Adjust this value to control the gravity strength
        this.jumpVelocity = -9000; // Adjust this value to control the jump height
        this.hamburger = new Hamburger();
        this.hasHamburger = false;
        this.speed = 0;
        this.shiftClick = 0;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Fish.toSprite());
        this.pos = new Vector(250, 240);
        this.vel = new Vector(0, 0);
        this.on('collisionstart', (event) => this.hitSomething(event));
        //this.on("exitviewport", ()=>this.resetPosition());
    }

    update(engine, delta) {

        if (this.shiftClick > 0) {
            this.shiftClick = this.shiftClick - 1;
        }
        else {
            this.speed = 0;
        }

        // UP = jump
        if (
            (engine.input.keyboard.wasPressed(Input.Keys.Up) ||
                engine.input.keyboard.wasPressed(Input.Keys.W) ||
                engine.input.keyboard.wasPressed(Input.Keys.Space)) &&
            this.canClickUp


        ) {
            this.vel.y = this.jumpVelocity; // Set the jump velocity
            this.isMovingUp = true;
            this.canClickUp = false;
            this.resetClickTimer(300); // Wait 1 second before the up key can be clicked again
            this.resetPositionAfterDelay(2000); // Reset position after 2 seconds


        }

        // Apply gravity
        this.vel.y += this.gravity * delta / 1000;

        // cursor keys is direction
        if (
            engine.input.keyboard.isHeld(Input.Keys.D) ||
            engine.input.keyboard.isHeld(Input.Keys.Right)
        ) {
            this.speed = 250;
        }
        if (
            engine.input.keyboard.isHeld(Input.Keys.A) ||
            engine.input.keyboard.isHeld(Input.Keys.Left)
        ) {
            this.speed = -250;
        }


        if (engine.input.keyboard.wasPressed(Input.Keys.ShiftRight)) {
            if (this.hasHamburger ) {
                this.hamburger.removeLive();
                this.speed = 1000;
                this.shiftClick = 20;

            }
        }

        let direction = new Vector(
             this.speed,
             this.speed
        );

        this.vel.x = direction.x; // Assign the x velocity

        // Apply velocity to position
        this.pos = this.pos.add(this.vel.scale(delta / 1000));

        // Prevent fish from going offscreen
        if (this.pos.x < 0) {
            this.pos.x = 0;
        }
        if (this.pos.x > engine.drawWidth) {
            this.pos.x = engine.drawWidth;
        }
        if (this.pos.y > engine.drawHeight) {
            this.pos.y = engine.drawHeight;
            engine.stop(); // Stop the game when the fish hits the canvas
        }

        // Reset velocity
        this.vel = Vector.Zero;
    }

    addHamburgerToPlayer() {
        this.hasHamburger = true;
        this.actions.blink(10, 10, 50);
        this.hamburger.resetLives();
    }


    resetPositionAfterDelay(delay) {
        setTimeout(() => {
            if (this.isMovingUp) {
                this.isMovingUp = false;
            }
        }, delay);
    }

    resetClickTimer(delay) {
        setTimeout(() => {
            this.canClickUp = true;
        }, delay);
    }

    hitSomething(event) {

        if (event.other instanceof  Levenerbij) {
            this.addHamburgerToPlayer();
        }
        else if (event.other instanceof Car || event.other instanceof Joker || event.other instanceof OrangeCar) {
            console.log('hit enemy');
              this.pos.y = 1600; // Set the y position to the bottom of the canvas
            this.vel.y = 0; // Reset the vertical velocity
            this.isMovingUp = false; // Reset the flag for moving up
            this.canClickUp = false; // Disable jumping
            setTimeout(() => {
                this.canClickUp = true; // Enable jumping after a delay
            }, 2000); // Wait for 2 seconds before enabling jumping again
            //this.engine.updateScore();
            this.engine.showEndScene();
            // Call the showEndScene methode
        }
    }
}

