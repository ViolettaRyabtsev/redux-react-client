import "./main-about.css";
import { Parallax, Background } from "react-parallax";
function MainPhoto() {
  return (
    <div className="about-us">
      <img
        alt="main-cocktails"
        src="https://cocktail-list.s3.us-west-2.amazonaws.com/cocktails+list/main.photo.jpg"
      ></img>
      <div className="new-summer">
        <h2>New Summer Collection!</h2>
        <h4>
          {" "}
          Check out our new collection for <b>birthday party</b>,{" "}
          <b>bachelor party</b>, <b>gender reveal party</b> collection
        </h4>
      </div>

      <div className="show-collection">
        <img
          alt="main-cocktails"
          src="https://cocktail-list.s3.us-west-2.amazonaws.com/cocktails+list/main.photo.jpg"
        ></img>
        <img
          alt="main-cocktails"
          src="https://cocktail-list.s3.us-west-2.amazonaws.com/cocktails+list/main.photo.jpg"
        ></img>
        <img
          alt="main-cocktails"
          src="https://cocktail-list.s3.us-west-2.amazonaws.com/cocktails+list/main.photo.jpg"
        ></img>
      </div>
    </div>
  );
}

export default MainPhoto;
