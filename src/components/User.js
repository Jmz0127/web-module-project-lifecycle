import React from 'react';

class User extends React.Component {
	state = {
		profilePic: ['https://avatars.githubusercontent.com/u/45055471?v=4']
	};
	render() {
		return (
			<div id='profile'>
				{this.state.profilePic.map((profileImage) => {
					return <img width='250' src={profileImage} />;
				})}
				<a target='_blank' href='https://github.com/Jmz0127'>
					<h3>Jon Mezz</h3>
				</a>
				<p>(Jmz0127)</p>
				<p>Total Repos: 42</p>
				<p>Total Followers: 22</p>
			</div>
		);
	}
}

export default User;
