import {Color, Font, FontUnit, Label, Scene, TextAlign, Vector} from "excalibur";
import {Pause} from './pausebutton.js'
import {Background} from "./Background.js";
import {Soundoff} from "./Soundoffbutton.js";



export class PauseScreen extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        const background = new Background()
        this.add(background)

        const gameOverLabel = new Label({
            text: 'continue Game',
            font: new Font({
                family: 'CustomFont',
                size: 100,
                unit: FontUnit.Px,

            }),
            fontFamily: 'CustomFont',
            textAlign: TextAlign.Center,
            color: Color.White,
            pos: new Vector(450, 300),

        });

        engine.showDebug(true);

        this.add(gameOverLabel);

        const pause = new Pause()
        this.add(pause);

        const soundoffbutton = new Soundoff()
        this.add(soundoffbutton)

    }


}
