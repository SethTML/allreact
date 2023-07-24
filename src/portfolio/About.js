import Soutside from './Images/soutside.png'

function About() {
  return (
    <div className="AboutCover">
      <div className = 'About reveal'>
        <div className = 'AboutTitle'>
          <span className = 'Crumb'>About Me</span>
          <span className = 'Head'>Learn More</span>
        </div>
        <div className = 'AboutContent'>
          <div className = 'AboutBody'>
            <span className = 'ABIntro'>Hello, I'm <span className = 'ABISpecial'>Seth LaMar</span></span>
            <div className = 'ABText'>A passionate front-end developer and content editor with a keen eye for design and a love for creating enjoyable user experiences. With a strong background in web development and a creative mindset, I bring ideas to life through code and captivating content. In my free time I enjoy going to the gym and challenging myself with competitive programming.
            </div>
          </div>
          <div className = 'AboutExtra'>
            <div className = 'AExtraCircle'>
              <span className = 'AExtraYears'>
                2
              </span>
            </div>
            <div className = 'AExtraDesc'>
              Years of Programming Experience
            </div>
          </div>
        </div>
        <div className = 'AboutInfo'>
          <div className = 'AInfoSection'>
            <span className = 'AITitle'>
              Name:
            </span>
            <span className = 'AIContent'>
              Seth LaMar
            </span>
          </div>
          <div className = 'AInfoSection'>
            <span className = 'AITitle'>
              Email:
            </span>
            <span className = 'AIContent'>
              slprogram2005@gmail.com
            </span>
          </div>
          <div className = 'AInfoSection'>
            <span className = 'AITitle'>
              Date of birth:
            </span>
            <span className = 'AIContent'>
              28 December, 2005
            </span>
          </div>
          <div className = 'AInfoSection'>
            <span className = 'AITitle'>
              From:
            </span>
            <span className = 'AIContent'>
              New Jersey, USA.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
