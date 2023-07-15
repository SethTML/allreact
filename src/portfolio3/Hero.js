import './portfolio3.css';
import Soutside from './Images/sonwall.JPG';

function Hero(props) {
  return (
      <div className = 'HeroCover'>
        <div className="Hero">
          <div className='HeroDesc'>
            <span className = 'HDIntro'>Hi I'm Seth, a</span>
            <span className = 'HDRole'>Front-end Developer</span>
            <span className = 'HDLocation'>based in New Jersey, USA.</span>
            <div className = 'HDButtons'>
              <div className = 'Button-Portfolio'>
                <span onClick={props.ScrollTo.bind(this,(".PortfolioCover"))} className = 'ButtonFont1'>View Portfolio</span>
              </div>
              <div className = 'Button-Contact'>
                
              <span onClick={props.ScrollTo.bind(this,(".ContactCover"))} className = 'ButtonFont2'>Contact Me</span>
              </div>
            </div>
          </div>
          <div className='HeroImg'>
            <img className = 'HeroImage' src = {Soutside} width = "350px"></img>
          </div>
        </div>
      </div>
  );
}

export default Hero;
