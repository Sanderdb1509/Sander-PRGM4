import { ImageSource, Loader } from 'excalibur';
import titleImage from '../images/Scherm_afbeelding_2023-06-06_om_10.34.44-removebg-preview.png';
import fishimage from '../images/image-removebg-preview-4.png';
import backgroundImage from '../images/Scherm­afbeelding 2023-06-05 om 19.31.50.png';
import carimage from '../images/jellyfish-6267169_1280.png';
import orangecarimage from '../images/Dirty_Bubble_Transparent-2 kopie.png';
import jokerimage from '../images/Scherm_afbeelding_2023-06-05_om_19.43.30-removebg-preview.png';
import levenerbijimage from '../images/image-removebg-preview-6.png';
import startschermimage from '../images/Scherm­afbeelding 2023-06-14 om 00.03.16.png'
import Startbuttonimage from '../images/Scherm_afbeelding_2023-06-16_om_15.48.29-removebg-preview.png'
import Pausebuttonimage from '../images/568359.png'
import Soundoffbuttonimage from '../images/Soundoff.png'
import BurgerAuto from "../images/Burgerauto.png";



const Resources = {
    Fish: new ImageSource(fishimage),
    Background: new ImageSource(backgroundImage),
    Car: new ImageSource(carimage),
    OrangeCar: new ImageSource(orangecarimage),
    Joker: new ImageSource(jokerimage),
    Levenerbij: new ImageSource(levenerbijimage),
    startschermimage: new ImageSource(startschermimage),
    Startbuttonimage: new ImageSource(Startbuttonimage),
    Pausebuttonimage: new ImageSource(Pausebuttonimage),
    Soundoffbuttonimage: new ImageSource(Soundoffbuttonimage),
    BurgerAuto: new ImageSource(BurgerAuto)

};

const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Background,
    Resources.Car,
    Resources.OrangeCar,
    Resources.Joker,
    Resources.Levenerbij,
    Resources.startschermimage,
    Resources.Startbuttonimage,
    Resources.Pausebuttonimage,
    Resources.Soundoffbuttonimage,
    Resources.BurgerAuto
]);

ResourceLoader.logo = titleImage;
ResourceLoader.logoWidth = 900;
ResourceLoader.logoHeight = 300;

export { Resources, ResourceLoader };
