import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Tu ma', duration: '2:45' },
		{ title: 'Tu pa', duration: '3:35' },
		{ title: 'Tu herma', duration: '1:45' },
		{ title: 'Tu prima', duration: '9:45' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
