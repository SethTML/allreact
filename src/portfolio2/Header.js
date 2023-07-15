import './portfolio2.css';
import Logo from "./Images/Logo.png";

function Header() {
  return (
    <div className="Header">
      <span className='HeaderLogo'>
        <span className='LogoColor-1'>sl</span>
        <span className='LogoColor-2'>.dev</span>
      </span>
      <div className = 'HeaderSelection'>
        <span className = 'SelectionText'>Home</span>
        <span className = 'SelectionText'>Skills</span>
        <span className = 'SelectionText'>Portfolio</span>
        <span className = 'SelectionText'>Contact</span>
      </div>
    </div>
  );
}

export default Header;
