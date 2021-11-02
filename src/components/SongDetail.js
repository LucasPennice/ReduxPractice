import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
	if (selectedSong !== null) {
		return (
			<div className="detailsContainer">
				<h1>Song Details</h1>
				<p>Title: {selectedSong.title}</p>
				<p>Duration: {selectedSong.duration}</p>
			</div>
		);
	}
	return <div className="selectASong">Select a song</div>;
};

const mapStateToProps = (state) => {
	console.log(state.selectedSong);
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
