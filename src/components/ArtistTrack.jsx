import { Link } from "react-router-dom";

const ArtistTrack = ({ track }) => {
  return (
    <div className="col-sm-auto col-md-auto text-center mb-5">
      <Link to={`/search/album/${track.album.id}`}>
        <img
          className="img-fluid"
          src={
            track.album.cover_medium // creating the album image anchor
          }
          alt="1"
        />
      </Link>
      <p className="m-0 mt-2">
        <Link href="#">
          Track: "
          {
            track.title.length < 16
              ? `${track.title}`
              : `${track.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </Link>
      </p>
      <p>
        <Link to={`/search/album/${track.album.id}`}>
          Album: "
          {
            track.album.title.length < 16
              ? `${track.album.title}`
              : `${track.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </Link>
      </p>
    </div>
  );
};

export default ArtistTrack;
