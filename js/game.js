import '../css/style.css';
import { Actor, Color, Font, FontUnit, Label, Engine, Loader, Vector, Physics, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { StartScreen } from "./startscherm.js";
import { PauseScreen } from "./PauseScene.js"
import { EndScene } from "./Endscene.js";
import {LevelScreen} from "./level.js";



export class Game extends Engine {
    constructor() {
        super({
            width: 1366,
            height: 690,
        });
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 400);

        this.showDebug(true);

        this.score = 0;
        this.mylabel = null;


        this.start(ResourceLoader).then(() => {
            this.showStartScreen();

        });
    }

    showStartScreen() {
        this.addScene("level", new LevelScreen());
        this.addScene('end', new EndScene());
        this.addScene("pause", new PauseScreen());



        this.addScene("start", new StartScreen());
        this.goToScene("start");
    }

    showPauseScreen() {
        this.addScene("level", new LevelScreen());
        this.addScene('end', new EndScene());


        this.addScene("start", new StartScreen());
        this.goToScene("start");
    }

    updateScore() {
        this.score++;
        //this.mylabel.text = `Score: ${this.score}`;
    }

    getScore(){
        return this.score;
    }


    showEndScene() {
        this.goToScene('end');
    }
}

const game = new Game();
