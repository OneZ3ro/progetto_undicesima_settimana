export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIPHOP = "GET_HIPHOP";

export const getRockAction = (songs) => ({
  type: GET_ROCK,
  payload: songs,
});

export const getPopAction = (songs) => ({
  type: GET_POP,
  payload: songs,
});

export const getHipHopAction = (songs) => ({
  type: GET_HIPHOP,
  payload: songs,
});

// ----- SONGS ----- SONGS ----- SONGS ----- SONGS ----- SONGS ----- SONGS ----- SONGS ----- SONGS ----- SONGS ----- SONGS

export const GET_SEARCH_SONGS = "GET_SEARCH_SONGS";
export const IS_LOADING_SONGS_FALSE = "IS_LOADING_SONGS_FALSE";
export const IS_LOADING_SONGS_TRUE = "IS_LOADING_SONGS_TRUE";

export const getSearchSongsAction = (songs) => ({
  type: GET_SEARCH_SONGS,
  payload: songs,
});

export const isLoadingSongsTrueAction = () => ({
  type: IS_LOADING_SONGS_TRUE,
});

export const isLoadingSongsFalseAction = () => ({
  type: IS_LOADING_SONGS_FALSE,
});

// ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM ----- ALBUM

export const GET_SEARCH_ALBUM = "GET_SEARCH_ALBUM";
export const IS_LOADING_ALBUM_FALSE = "IS_LOADING_ALBUM_FALSE";
export const IS_LOADING_ALBUM_TRUE = "IS_LOADING_ALBUM_TRUE";

export const getSearchAlbumsAction = (album) => ({
  type: GET_SEARCH_ALBUM,
  payload: album,
});

export const isLoadingAlbumsTrueAction = () => ({
  type: IS_LOADING_ALBUM_TRUE,
});

export const isLoadingAlbumsFalseAction = () => ({
  type: IS_LOADING_ALBUM_FALSE,
});

// ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST ----- ARTIST

export const GET_SEARCH_ARTIST = "GET_SEARCH_ARTIST";
export const IS_LOADING_ARTIST_FALSE = "IS_LOADING_ARTIST_FALSE";
export const IS_LOADING_ARTIST_TRUE = "IS_LOADING_ARTIST_TRUE";
export const GET_SEARCH_ARTIST_TRACKS = "GET_SEARCH_ARTIST_TRACKS";

export const getSearchArtistAction = (artist) => ({
  type: GET_SEARCH_ARTIST,
  payload: artist,
});

export const getSearchArtistTracksAction = (artistTracks) => ({
  type: GET_SEARCH_ARTIST_TRACKS,
  payload: artistTracks,
});

export const isLoadingArtistTrueAction = () => ({
  type: IS_LOADING_ARTIST_TRUE,
});

export const isLoadingArtistFalseAction = () => ({
  type: IS_LOADING_ARTIST_FALSE,
});
