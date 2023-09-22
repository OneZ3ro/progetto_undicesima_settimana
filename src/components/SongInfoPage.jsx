import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  isLoadingAlbumsTrueAction,
  isLoadingArtistTrueAction,
} from "../redux/actions";

const SongInfoPage = ({ songInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="col text-center py-2" id={songInfo.id}>
      <Link
        to={`/search/album/${songInfo.album.id}`}
        onClick={() => dispatch(isLoadingAlbumsTrueAction())}
      >
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </Link>
      <p className="m-0 mt-2">
        <Link
          to={`/search/album/${songInfo.album.id}`}
          onClick={() => dispatch(isLoadingAlbumsTrueAction())}
        >
          Album: "
          {songInfo.album.title.length < 16
            ? `${songInfo.album.title}`
            : `${songInfo.album.title.substring(0, 16)}...`}
          "
        </Link>
      </p>
      <p>
        <Link
          to={`/search/artist/${songInfo.artist.name}`}
          onClick={() => dispatch(isLoadingArtistTrueAction())}
        >
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </div>
  );
};
export default SongInfoPage;
