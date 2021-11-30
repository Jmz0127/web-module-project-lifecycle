import React from 'react';
import User from './components/User';
class App extends React.Component {
	state = {
		followerImages: ['https://avatars.githubusercontent.com/u/31264591?v=4', 'https://avatars.githubusercontent.com/u/90978408?v=4', 'https://avatars.githubusercontent.com/u/89855627?v=4'],
		followerNames: ['FftyShadesofCode', 'SafiaOmar', 'Darla-Young']
	};
	render() {
		return (
			<div>
				<h1>GITHUB, HUB</h1>
				<form>
					<input placeholder='Github Handle' />
					<button>Search</button>
				</form>

				<User />

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
