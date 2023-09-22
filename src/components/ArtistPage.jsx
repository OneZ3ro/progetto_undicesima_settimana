import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getSearchArtistAction,
  getSearchArtistTracksAction,
  isLoadingArtistFalseAction,
} from "../redux/actions";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ArtistTrack from "./ArtistTrack";

const ArtistPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.searchArtist.isLoading);
  const artist = useSelector((state) => state.searchArtist.artist);
  const tracks = useSelector((state) => state.searchArtist.tracks);

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + params.id
      );

      // const imgContainer = document.querySelector("#img-container"); // gets a reference to the image container
      // const trackList = document.querySelector("#trackList"); // gets a reference to the tracklist div

      if (response.ok) {
        const artist = await response.json(); // transforms the response into a JSON
        console.log("artist", artist);
        dispatch(getSearchArtistAction(artist));
        //   imgContainer.innerHTML = albumArt(album); // creates the albumArt for the img-container
        //   for (let i = 0; i < album.tracks.data.length; i++) {
        //     let div = document.createElement("div");
        //     div.innerHTML += song(album.tracks.data[i]); // use "song" method to create the item
        //     trackList.appendChild(div); // add the item to the tracklist
        //   }
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(isLoadingArtistFalseAction());
    }
  };

  const fetchArtistTracks = async (artistName) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );

      // const imgContainer = document.querySelector("#img-container"); // gets a reference to the image container
      // const trackList = document.querySelector("#trackList"); // gets a reference to the tracklist div

      if (response.ok) {
        const artistTracks = await response.json(); // transforms the response into a JSON
        console.log("artistTracks", artistTracks);
        dispatch(getSearchArtistTracksAction(artistTracks.data));
        //   imgContainer.innerHTML = albumArt(album); // creates the albumArt for the img-container
        //   for (let i = 0; i < album.tracks.data.length; i++) {
        //     let div = document.createElement("div");
        //     div.innerHTML += song(album.tracks.data[i]); // use "song" method to create the item
        //     trackList.appendChild(div); // add the item to the tracklist
        //   }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtist();
    fetchArtistTracks(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      {console.log("tracks", tracks)}
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Link href="#TRENDING">TRENDING</Link>
          <Link href="#PODCAST">PODCAST</Link>
          <Link href="#MOODS-AND-GENRES">MOODS AND GENRES</Link>
          <Link href="#NEW-RELEASES">NEW RELEASES</Link>
          <Link href="#DISCOVER">DISCOVER</Link>
        </div>
      </div>
      {isLoading ? (
        <Spinner animation="border" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : artist ? (
        <>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-10 mt-5">
              <h2 className="titleMain">{artist.name}</h2>
              <div id="followers">{artist.nb_fan} followers</div>
              <div
                className="d-flex justify-content-center"
                id="button-container"
              >
                <button
                  className="btn btn-success me-2 mainButton"
                  id="playButton"
                >
                  PLAY
                </button>
                <button
                  className="btn btn-outline-light mainButton"
                  id="followButton"
                >
                  FOLLOW
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
              <div className="mt-4 d-flex justify-content-start">
                <h2 className="text-white font-weight-bold">Tracks</h2>
              </div>
              <div className="pt-5 mb-5">
                <div className="row" id="apiLoaded">
                  {tracks.length > 0 ? (
                    tracks.map((track) => (
                      <ArtistTrack track={track} key={`track-${track.id}`} />
                    ))
                  ) : (
                    <Spinner animation="border" variant="light">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner animation="border" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default ArtistPage;
