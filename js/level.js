import {Color, Font, FontUnit, Input, Label, Scene, TextAlign, Vector} from "excalibur";
import {Background} from "./Background.js";
import {Fish} from "./fish.js";
import {Resources} from "./resources.js";
import {Car} from "./Car.js";
import {OrangeCar} from "./OrangeCar.js";
import {Joker} from "./joker.js";
import {Levenerbij} from "./Levenerbij.js";


export class LevelScreen extends Scene {
    constructor(game) {
        super();
        this.game = game;

        this.score = 0;
        this.mylabel = null;
        this.fish = null;
        this.hamText = null;
        this.showHamburgerText = false;



    }

    onInitialize(engine) {

        this.score = 0;
        this.mylabel = new Label({
            text: `Score: ${this.score }`,
            pos: new Vector(100, 100),
            font: new Font({
                family: "impact",
                size: 40,
                unit: FontUnit.Px,
                color: Color.White,
            }),
        });

        console.log("Start the game!");

        const bg = new Background();
        this.add(bg); // Background is added as the first element

        this.fish = new Fish();
        this.fish.graphics.use(Resources.Fish.toSprite());
        this.add(this.fish);

        const car = new Car();
        car.graphics.use(Resources.Car.toSprite());
        this.add(car);

        const orangecar = new OrangeCar();
        orangecar.graphics.use(Resources.OrangeCar.toSprite());
        this.add(orangecar);

        const joker = new Joker();
        joker.graphics.use(Resources.Joker.toSprite());
        this.add(joker);

        const levenerbij = new Levenerbij();
        levenerbij.graphics.use(Resources.Levenerbij.toSprite());
        this.add(levenerbij);

        this.add(this.mylabel); // Score label is added as the last element

        engine.input.keyboard.on("press", (evt) => {
            if (evt.key === Input.Keys.Space) {
                this.updateScore();
           }
        });


    }
    update(engine, delta){
        super.update(engine, delta);

        if(engine.input.keyboard.wasPressed(Input.Keys.P)) {
            this.engine.goToScene('pause');
        }

        if (this.fish.hasHamburger) {
            this.fish.graphics.use(Resources.BurgerAuto.toSprite());
            this.changeHamburgerLabel(true);
            let hamburgerScore = this.fish.hamburger.lives;
            console.log(hamburgerScore);
            this.hamText.text = 'hamburgers: '+ hamburgerScore;
            if (hamburgerScore <= 0 ){
                this.fish.hasHamburger = false;
                this.fish.graphics.use(Resources.Fish.toSprite());

            }



        }
        else {
            this.changeHamburgerLabel(false);
        }


    }

    changeHamburgerLabel(show) {
        if (!show) {
            if (this.showHamburgerText) {
                this.remove(this.hamText);
                this.showHamburgerText = false;
            }
        }
        else {
            if (!this.showHamburgerText) {
                //add text
                this.hamText = new Label({
                    text: `hamburger:`,
                    pos: new Vector(100, 600),
                    font: new Font({
                        family: "impact",
                        size: 40,
                        unit: FontUnit.Px,
                        color: Color.White,
                    }),
                });

                this.add(this.hamText);
                this.showHamburgerText = true;
            }

        }
    }

    updateScore() {
        this.score++
        this.mylabel.text = `Score: ${this.score}`
        localStorage.setItem('scores', JSON.stringify(this.score));
    }


}
