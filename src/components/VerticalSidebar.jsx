import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getSearchSongsAction,
  isLoadingSongsFalseAction,
  isLoadingSongsTrueAction,
} from "../redux/actions";

const VerticalSidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = async (e) => {
    e.preventDefault();
    dispatch(isLoadingSongsTrueAction());
    console.log("ok");
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      ); // gets the information
      if (response.ok) {
        const result = await response.json(); // transforms the response to json
        const songs = result.data; // gets the songs info
        console.log(songs);
        dispatch(getSearchSongsAction(songs));
        //   for (let x = 0; x < result.data.length; x++) {
        //     div.innerHTML += albumCard(result.data[x])
        //   }
        navigate("/search");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(isLoadingSongsFalseAction());
    }
  };
  return (
    <div className="col-2">
      <nav
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
        style={{ padding: "8px 16px" }}
      >
        <div className="nav-container">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img
                src="http://www.clker.com/cliparts/5/c/a/f/141490005811489798026274.spotify-logo-horizontal-white-rgb.png"
                alt="Spotify_Logo"
                width="131"
                height="40"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link" to={"/"}>
                    <i className="fa fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" href="#a">
                    <i class="fa fa-folder-open fa-lg"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li style={{ paddingBlock: "8px" }}>
                  <Form onSubmit={search}>
                    <InputGroup>
                      <Form.Control
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search"
                        required
                      />
                      <Button
                        type="submit"
                        className="btn btn-outline-secondary btn-sm"
                        style={{ backgroundColor: "transparent" }}
                      >
                        Go
                      </Button>
                    </InputGroup>
                  </Form>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <Link href="#a">Cookie Policy</Link> |<Link href="#a"> Privacy</Link>
        </div>
      </nav>
    </div>
  );
};
export default VerticalSidebar;
