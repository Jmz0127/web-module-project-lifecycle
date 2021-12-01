import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
class App extends React.Component {
	state = {
		currentUser: 'Jmz0127',
		user: {
			avatar_url: 'https://avatars.githubusercontent.com/u/45055471?v=4',
			html_url: 'https://github.com/Jmz0127',
			name: 'Jon_Em',
			login: 'Jmz0127',
			public_repos: 42,
			followers: 22
		},
		followers: [
			{
				login: 'roxanneweber',
				avatar_url: 'https://avatars.githubusercontent.com/u/89050736?v=4',
				html_url: 'https://github.com/roxanneweber'
			},
			{
				login: 'roxanneweber',
				avatar_url: 'https://avatars.githubusercontent.com/u/89050736?v=4',
				html_url: 'https://github.com/roxanneweber'
			},
			{
				login: 'roxanneweber',
				avatar_url: 'https://avatars.githubusercontent.com/u/89050736?v=4',
				html_url: 'https://github.com/roxanneweber'
			}
		]
	};
	//finished add in state
	render() {
		return (
			<div>
				<h1>GITHUB, HUB</h1>
				<form>
					<input placeholder='Github Handle' />
					<button>Search</button>
				</form>

				<User user={this.state.user} />
				<FollowerList followers={this.state.followers} />
			</div>
		);
	}
}

export default App;
