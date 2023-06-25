export class Hamburger {

    lives = 3

    constructor() {

    }

    updateLives(live) {

        let lives = this.lives;
        switch (live) {

            case "add":
                lives = lives +1;
                break;

            case "remove":
                lives = lives -1;
                break;

            case "reset":
                lives = 3;
                break;

            default:
                break;
        }

        this.lives = lives;
    }

    addLive() {
        this.updateLives("add");
    }

    removeLive() {
        this.updateLives("remove");
    }

    resetLives(){
        this.updateLives("reset");
    }
}