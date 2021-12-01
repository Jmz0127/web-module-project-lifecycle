import React from 'react';
import FollowerList from './FollowerList';

class Follower extends React.Component {
	render() {
		const { follower } = this.props;
		return (
			<div className='follower'>
				<img width='150px' src={follower.avatar_url} />
				<a target='_blank' href={follower.html_url}>
					{follower.login}
				</a>
			</div>
		);
	}
}

export default Follower;
