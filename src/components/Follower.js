import React from 'react';

class Follower extends React.Component {
	render() {
		return (
			<div className='follower'>
				<img width='200px' src='https://avatars.githubusercontent.com/u/89050736?v=4' />
				<a target='_blank' href='https://api.github.com/users/roxanneweber'>
					roxanneweber
				</a>
			</div>
		);
	}
}

export default Follower;
