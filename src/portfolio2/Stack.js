import './portfolio2.css';
import HTMLgo from './Images/HTMLgo.png';
import CSSgo from "./Images/CSSgo.png";

function Stack() {
  return (
    <div className = 'TechStack'>
      <span className = 'StackFont'>Tech Stack</span>
      <div className = 'StackGrid'>
        <div className='SGItem'>
          <img src = {HTMLgo} height = "50px"></img>
          <span className='SGIFont'>HTML</span>
        </div>
        <div className='SGItem'>
        <img src = {CSSgo} height = "50px"></img>
          <span className='SGIFont'>CSS</span>
        </div>
        <div className='SGItem'></div>
        <div className='SGItem'></div>
        <div className='SGItem'></div>
        <div className='SGItem'></div>
      </div>
    </div>
  );
}

export default Stack;
