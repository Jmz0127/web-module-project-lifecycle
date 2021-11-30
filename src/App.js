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
					<button>Github Handle</button>
					<input />
				</form>
				<div className='profile'>
					{this.state.profilePic.map((profileImage) => {
						return <img width='250' src={profileImage} />;
					})}
					<h2>Jon Em</h2>
					<h4>(full-stack programmer)</h4>
				</div>
				<div>
					<h2>Followers:</h2>
				</div>
				<div className='follower-grid'>
					{this.state.followerImages.map((followerImage) => {
						return <img width='150' src={followerImage} />;
					})}
					{this.state.followerNames.map((followerName) => {
						return <h3>{followerName}</h3>;
					})}
				</div>
			</div>
		);
	}
}

export default App;
