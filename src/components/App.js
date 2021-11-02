import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';

export default () => {
	return (
		<div className="appStyle">
			<SongList />
			<SongDetail />
		</div>
	);
};
