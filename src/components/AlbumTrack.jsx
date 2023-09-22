import { Link } from "react-router-dom";

const AlbumTrack = ({ track }) => {
  return (
    <div className="py-3 trackHover">
      <Link
        href="#j"
        className="card-title trackHover px-3"
        style={{ color: "white" }}
      >
        {track.title}
      </Link>
      <small className="duration pe-3" style={{ color: "white" }}>
        {Math.floor(
          parseInt(track.duration) / 60 // setting the duration minutes
        )}
        :
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};
export default AlbumTrack;
