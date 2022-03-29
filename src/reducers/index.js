import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Smells like teen spirit",
      duration: "69:59",
    },
    {
      title: "Neptune",
      duration: "10:09",
    },
    {
      title: "What went down",
      duration: "6:09",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
