import { Link } from "react-router-dom";
import shuffle from "../assets/playerbuttons/Shuffle.png";
import previous from "../assets/playerbuttons/Previous.png";
import play from "../assets/playerbuttons/Play.png";
import next from "../assets/playerbuttons/Next.png";
import repeat from "../assets/playerbuttons/Repeat.png";

const Player = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 playerControls mt-1 w-100">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <Link href="#a">
                    <img src={shuffle} alt="shuffle" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src={previous} alt="previous" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src={play} alt="play" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src={next} alt="next" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src={repeat} alt="repeat" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
