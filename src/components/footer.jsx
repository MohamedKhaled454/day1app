import Button from "./button";

function Footer() {
  function getYear() {
    let date = new Date();
    return date.getFullYear();
  }
  return (
    <div className="Footer bg-black text-light  px-3">
      <footer className="d-flex justify-content-center align-items-center gap-2 h-100 ">
        <div className="col-4  d-flex flex-column justify-content-center align-items-start p-5">
          <h2>Get In Touch</h2>
          <ul className="list-unstyled">
            <li className="gap-2 d-flex justify-content-center align-items-center">
              <span>mismaeil@gamil.com</span>
            </li>
            <li className="gap-2 d-flex justify-content-center align-items-center">
              <span>123-444-5678</span>
            </li>
          </ul>
        </div>
        <div className="col-4 ">
          <Button color="btn-light " text="Contact Me"></Button>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-end p-5">
          <ul className="list-unstyled gap-3 d-flex justify-content-center align-items-center">
          </ul>
          <div>
            <span>
              Copy Right © <span>{getYear()}</span> KH
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;