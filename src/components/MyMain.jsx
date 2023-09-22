import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHipHopAction, getPopAction, getRockAction } from "../redux/actions";
import { useEffect } from "react";
import SongInfoPage from "./SongInfoPage";
import { Spinner } from "react-bootstrap";

const MyMain = () => {
  const dispatch = useDispatch();
  const rock = useSelector((state) => state.searchMain.rock);
  const pop = useSelector((state) => state.searchMain.pop);
  const hipHop = useSelector((state) => state.searchMain.hipHop);
  const rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  const popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  const hipHopArtists = [
    "eminem",
    "snoopdogg",
    "lilwayne",
    "drake",
    "kanyewest",
  ];

  const fetchRockArtists = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          rockArtists[1]
      ); // gets the information

      if (response.ok) {
        const result = await response.json(); // transforms the response to json
        console.log("fetchRockArtists", result);
        dispatch(getRockAction(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPopArtists = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          popArtists[2]
      ); // gets the information

      if (response.ok) {
        const result = await response.json(); // transforms the response to
        console.log("fetchPopArtists", result);

        dispatch(getPopAction(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchHipHopArtists = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          hipHopArtists[3]
      ); // gets the information

      if (response.ok) {
        const result = await response.json(); // transforms the response to json
        console.log("fetchHipHopArtists", result);

        dispatch(getHipHopAction(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRockArtists();
    fetchPopArtists();
    fetchHipHopArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Link href="#TRENDING">TRENDING</Link>
          <Link href="#PODCAST">PODCAST</Link>
          <Link href="#MOODS-AND-GENRES">MOODS AND GENRES</Link>
          <Link href="#NEW-RELEASES">NEW RELEASES</Link>
          <Link href="#DISCOVER">DISCOVER</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock classNameics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {rock.length === 0 ? (
                <Spinner animation="border" variant="light">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                rock
                  .filter((elem) => rock.indexOf(elem) < 4)
                  .map((songInfo) => (
                    <SongInfoPage
                      songInfo={songInfo}
                      key={`song-${songInfo.id}`}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {pop.length === 0 ? (
                <Spinner animation="border" variant="light">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                pop
                  .filter((elem) => pop.indexOf(elem) < 4)
                  .map((songInfo) => (
                    <SongInfoPage
                      songInfo={songInfo}
                      key={`song-${songInfo.id}`}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {hipHop.length === 0 ? (
                <Spinner animation="border" variant="light">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                hipHop
                  .filter((elem) => hipHop.indexOf(elem) < 4)
                  .map((songInfo) => (
                    <SongInfoPage
                      songInfo={songInfo}
                      key={`song-${songInfo.id}`}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMain;
