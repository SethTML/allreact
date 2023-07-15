import './portfolio3.css';
import GITHUBgo from './Images/GITHUBgo.png';
import openlink from './Images/openlink.png';

function Project(props) {
  let items = props.tools.map(function(item, index){
    return (<span className = 'ProjectTool' key = {index}>{item}</span>);
  });

  let pstyle = {
    //backgroundImage: props.image
  }

  return (
    <div className = 'Project'>
      <div style = {pstyle} className = 'ProjectImage'>

      </div>
      <div className = 'ProjectInfo'>
        <span className = 'ProjectName'>{props.name}</span>
        <span className = 'ProjectDesc'>{props.desc}</span>
        <div className = 'ProjectToolbox'>{items}</div>
        <div className = 'ProjectSource'>
          <div className = 'SourceCode' link = {props.codelink}>
            <span className = 'SourceFont'>View Code
              <img src = {GITHUBgo} className = 'Sourcego' height = "20px"></img>
            </span>
          </div>
          <div className = 'SourceView' link = {props.viewlink}>
            <span className = 'SourceFont'>Live Demo
            <img src = {openlink} className = 'Sourcego' height = "20px"></img></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
