import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import style from '../style.css';

const SongList = (props) => {
	return <div className="songListContainer">{renderSongList(props)}</div>;
};

const renderSongList = (props) => {
	return props.songs.map((song) => {
		return (
			<div
				className="cardStyle"
				key={song.title}
				onClick={() => {
					props.selectSong(null);
					setTimeout(() => props.selectSong(song), 10);
				}}
			>
				<div>
					<p className="text">
						<span>Title:</span> {song.title}
					</p>
					<p className="text">
						<span>Duration:</span> {song.duration}
					</p>
				</div>
				<button className="btn">Select</button>
			</div>
		);
	});
};

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
