import { Link } from "react-router-dom";
// import previous from "src/assets/playerbuttons/Previous.png";

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
                    <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src="playerbuttons/Previous.png" alt="previous" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src="playerbuttons/Play.png" alt="play" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src="playerbuttons/Next.png" alt="next" />
                  </Link>
                </div>
                <div className="col-auto">
                  <Link href="#a">
                    <img src="playerbuttons/Repeat.png" alt="repeat" />
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
