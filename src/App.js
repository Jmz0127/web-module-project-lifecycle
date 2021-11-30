import React from 'react';

class App extends React.Component {
	state = {
		followerImages: ['https://avatars.githubusercontent.com/u/31264591?v=4', 'https://avatars.githubusercontent.com/u/90978408?v=4', 'https://avatars.githubusercontent.com/u/89855627?v=4'],
		followerNames: ['FftyShadesofCode', 'SafiaOmar', 'Darla-Young'],
		profilePic: ['https://avatars.githubusercontent.com/u/45055471?v=4']
	};
	render() {
		return (
			<div>
				<h1>GITHUB, HUB</h1>
				<form>
					<input placeholder='Github Handle' />
					<button>Search</button>
				</form>

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

				<div id='followers'>
					<h2>Followers:</h2>
					<div className='follower'>
						{this.state.followerImages.map((followerImage) => {
							return <img width='150' src={followerImage} />;
						})}
						{this.state.followerNames.map((followerName) => {
							return <p>{followerName}</p>;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
