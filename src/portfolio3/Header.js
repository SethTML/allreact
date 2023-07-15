import './portfolio3.css';

function Header(props) {
  
  return (
    <div className="Header">
        <div className = 'HeaderContent'>
          <span onClick={props.ScrollTo.bind(this,(".HeroCover"))} className = 'HeaderLogo'>seth!</span>
          <div className = 'HeaderGroup'>
            <span onClick={props.ScrollTo.bind(this,(".AboutCover"))} className = 'HGroupItem'>About</span>
            <span onClick={props.ScrollTo.bind(this,(".SkillsCover"))} className = 'HGroupItem'>Skills</span>
            <span onClick={props.ScrollTo.bind(this,(".PortfolioCover"))} className = 'HGroupItem'>Portfolio</span>
            <span  onClick={props.ScrollTo.bind(this,(".ContactCover"))}className = 'HGroupItem'>Contact</span>
          </div>
        </div>
    </div>
  );
}

export default Header;
