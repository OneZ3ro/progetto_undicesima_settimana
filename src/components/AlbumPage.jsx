import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getSearchAlbumsAction,
  isLoadingAlbumsFalseAction,
} from "../redux/actions";
import { Spinner } from "react-bootstrap";
import AlbumTrack from "./AlbumTrack";

const AlbumPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.searchAlbum.isLoading);
  const album = useSelector((state) => state.searchAlbum.album);
  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + params.id
      );

      // const imgContainer = document.querySelector("#img-container"); // gets a reference to the image container
      // const trackList = document.querySelector("#trackList"); // gets a reference to the tracklist div

      if (response.ok) {
        const album = await response.json(); // transforms the response into a JSON
        console.log("album", album);
        dispatch(getSearchAlbumsAction(album));
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
      dispatch(isLoadingAlbumsFalseAction());
    }
  };

  useEffect(() => {
    fetchAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
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
        ) : (
          <div className="row">
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img src={album.cover} class="card-img img-fluid" alt="Album" />
              <div class="mt-4 text-center">
                <p class="album-title">{album.title}</p>
              </div>
              <div class="text-center">
                <p class="artist-name">{album.artist.name}</p>
              </div>
              <div class="mt-4 text-center">
                <button id="btnPlay" class="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
            <div className="col-md-8 p-5">
              <div className="row">
                <div className="col-md-10 mb-5" id="trackList">
                  {album.tracks.data.map((track) => (
                    <AlbumTrack track={track} key={`track-${track.id}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AlbumPage;
