import {Color, Font, FontUnit, Label, Scene, TextAlign, Vector,Sound} from "excalibur";
import {Start} from './Startbutton.js'
import {Background} from "./Background.js";

export let backgroundMusic = new Sound("src/music/Backgroundmusic.mp3");
backgroundMusic.load();


export class StartScreen extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        const background = new Background()
        this.add(background)


        backgroundMusic.loop = true;
        backgroundMusic.play();

        const gameOverLabel = new Label({
            text: 'Start Game',
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

        const start = new Start()
        this.add(start)

    }


}
