import './portfolio3.css';
import Project from './Project.js'

function Header() {
  return (
    <div className="PortfolioCover">
      <div className = 'Portfolio'> 
        <span className = 'Crumb'>Portfolio</span>
        <span className = 'Head'>My Projects</span>
        <div className = 'Projects'>
          <Project
          name = "Test Project"
          desc = "This project was developed for Johnny Green using React.js."
          tools = {["React","Z API"]}
          codelink = "https://youtube.com"
          viewlink = "https://youtube.com"  
          image = "url(./Images/CSSgo.png)"
          />
          <Project
          name = "Test Project"
          desc = "This project was developed for Johnny Green using React.js."
          tools = {["React","Z API"]}
          codelink = "https://youtube.com"
          viewlink = "https://youtube.com"  
          image = "url(./Images/CSSgo.png)"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
