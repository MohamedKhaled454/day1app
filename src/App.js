// import logo from './logo.svg';
import AboutMe from "./components/about_me";
import './App.css';
// import Button from "./components/button";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Portofolio from "./components/porotfolio";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portofolio></Portofolio>

      <Footer></Footer>
    </div>
  );
}

export default App;
