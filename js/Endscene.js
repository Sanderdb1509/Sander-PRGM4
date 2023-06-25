import { Color, Font, FontUnit, Label, Scene, TextAlign, Vector } from 'excalibur';
import { Game } from "./game.js";

import {Start} from './Startbutton.js'

export class EndScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        const storedScores = JSON.parse(localStorage.getItem('scores'));
        const gameOverLabel = new Label({
            text: 'GAME OVER',
            font: new Font({
                family: 'CustomFont',
                size: 100,
                unit: FontUnit.Px,
            }),
            fontFamily: 'CustomFont',
            textAlign: TextAlign.Center,
            color: Color.White,
            pos: new Vector(400, 350),
        });

        const retryButton = new Label({
            text: 'Retry',
            font: new Font({
                family: 'CustomFont',
                size: 40,
                unit: FontUnit.Px,
            }),
            color: Color.White,
            backgroundColor: Color.Green,
            textAlign: TextAlign.Center,
            pos: new Vector(625, 400),
        });
        this.score =
            this.mylabel = new Label({
                text: `Score: ${storedScores}`,
                pos: new Vector(600, 250),
                font: new Font({
                    family: 'Roboto slab',
                    size: 40,
                    unit: FontUnit.Px,
                    color: Color.White
                })
            })
        this.add(this.mylabel)

        this.add(gameOverLabel);
        this.add(retryButton);


        const start = new Start()
        this.add(start)
    }
}
