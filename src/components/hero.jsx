import image from "../2.jpeg";
import Button from "./button"
function Hero() {
  return (
    <div id="hero" className="
       Hero bg-dark" style={{
        backgroundImage: `url(${image}`,
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat" }} >
      <section  className="h-100 container">
        <div className="w-50 text-center text-light  h-100  d-flex flex-column justify-content-center align-items-start p-5 gap-2">
          <h2 className="fs-1 fw-bolder">Katie Reed</h2>
          <p className="lead text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <Button text='Contact Me' color = 'btn-outline-light'></Button>
        </div>
      </section>
    </div>
  );
}

export default Hero;