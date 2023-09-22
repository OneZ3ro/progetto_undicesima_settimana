import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/MyMain";
import { Container, Row } from "react-bootstrap";
import VerticalSidebar from "./components/VerticalSidebar";
import SearchPage from "./components/SearchPage";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <VerticalSidebar />
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/search/" element={<SearchPage />} />
            <Route path="/search/album/:id" element={<AlbumPage />} />
            <Route path="/search/artist/:id" element={<ArtistPage />} />
          </Routes>
        </Row>
        <Player />
      </Container>
    </BrowserRouter>
  );
}

export default App;
