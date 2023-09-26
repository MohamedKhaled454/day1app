import Card from "./card";


function Portofolio() {
  // let cardsList = [
  //   { text: "Web Design" },
  //   { text: "Mobile Design" },
  //   { text: "Logo Design" },
  //   { text: "Web Application Development" },
  //   { text: "Mobile Application Development" },
  //   { text: "PWA Development" },
  // ];
  return (
    <div id="portfolio" className="Portfolio ">
      <div className="h-100 container ">
        <div className=" text-center text-dark w-100 h-100 d-flex flex-column justify-content-center align-items-center p-5 gap-4">
          <h2 className="fs-1 fw-bolder col-3 align-self-start">Portfolio</h2>

          <div className="d-flex  w-80 col-10 flex-wrap justify-content-center align-items-center gap-5 py-2 ">



               <Card color="bg-secondary" text="Web Design"></Card>
               <Card color="bg-dark" text="Web Application Development"></Card>
            <Card color="bg-secondary" text="Mobile Design"></Card>
            <Card color="bg-dark" text="Logo Design"></Card>
            <Card color="bg-secondary" text="Mobile Application Development"></Card>
            <Card color="bg-dark" text="PWA Develo"></Card> 
          
            {/* {cardsList.map((item, index) => {
              let color = "";
              if (index % 2 === 0) {
                color = "bg-secondary";
              } else {
                color = "bg-dark";
              }
              return (
                <Card
                  key={`card${index}`}
                  color={color}
                  text={item.text}
                ></Card>
              );
            })}      */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;