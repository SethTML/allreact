import './portfolio2.css';
import Soutside from './Images/soutside2.png';
import Wave from "./Images/wavehand.png"

function Main() {
  return (
    <div className = 'MainContent'>
        <img className = 'MainImage' src = {Soutside}></img>
        <span className = 'MainImageLabel'>Hello, I'm Seth.<img src = {Wave} height = "30px"></img> </span>
        <span className='MainRole'>Front-end Developer</span>
        <span className='MainDesc'>Discover more <span className = 'MainBold'>about me.</span></span>
    </div>
  );
}

export default Main;
