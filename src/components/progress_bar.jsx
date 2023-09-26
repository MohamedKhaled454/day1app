function ProgressBar(props) {
  return (

     <div className="w-100 my-3 d-flex justify-content-center align-items-center">
      <label className="bg-secondary col-4" htmlFor="subject">
      {props.text}
      </label>
      <progress id="subject" value={props.value} max="100" className=" col-10"></progress>
    </div>
 
  );
}

export default ProgressBar;