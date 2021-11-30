import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>GITHUB, HUB</h1>
				<form>
					<button>Github Handle</button>
					<input />
				</form>
				<div class='profile'>
					<img src='https://randomuser.me/api/portraits/men/40.jpg' />
					<h2>Jon Em</h2>
					<h4>(full-stack programmer)</h4>
				</div>
				<div>
					<h2>Followers:</h2>
				</div>
				<div class='follower-grid'>
					<div>
						<img src='https://randomuser.me/api/portraits/men/41.jpg' />
						<h4>Willionaire</h4>
					</div>
					<div>
						<img src='https://randomuser.me/api/portraits/women/47.jpg' />
						<h4>Laur Jo</h4>
					</div>
					<div>
						<img src='https://randomuser.me/api/portraits/women/90.jpg' />
						<h4>Hannah Mezzadri</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
