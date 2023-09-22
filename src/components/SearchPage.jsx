import { Link } from "react-router-dom";
import SongInfoPage from "./SongInfoPage";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const SearchPage = () => {
  const songs = useSelector((state) => state.searchSongs.songs);
  const isLoadingSongs = useSelector((state) => state.searchSongs.isLoading);
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
      {songs.length === 0 ? (
        <div className="row">
          <div className="col-10">
            <div id="searchResults">
              <h2>Search something</h2>
            </div>
          </div>
        </div>
      ) : isLoadingSongs ? (
        <Spinner animation="border" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="row">
          <div className="col-10">
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {songs.map((songInfo) => (
                  <SongInfoPage
                    songInfo={songInfo}
                    key={`song-${songInfo.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchPage;
