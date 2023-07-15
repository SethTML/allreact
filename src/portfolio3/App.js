import './portfolio3.css';
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Copyright from './Copyright.js';

function ScrollTo(query){
  let item = document.querySelector(query);
  item.scrollIntoView({behavior: 'smooth'})
}

function App() {
  return (
    <div className="App">
        <Header ScrollTo = {ScrollTo}/>
        <Hero ScrollTo = {ScrollTo}/>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Copyright />
    </div>
  );
}

export default App;
