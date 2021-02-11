import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Songs from './containers/songs';
import Cart from './containers/cart';
import Lyrics from './containers/Lyrics'
import AddSong from './Pages/AddSong';
import Styles from './containers/Styles'
import StylesDetail from './containers/StylesDetail';

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route exact path="/">
						<Songs />
					</Route>
					<Route exact path="/song/:songId">
						<Lyrics />
					</Route>
					<Route exact path="/styles">
						<Styles />
					</Route>
					<Route exact path="/styles/:styleName">
						<StylesDetail />
					</Route>
					<Route exact path="/add">
						<AddSong />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
				</Switch>
			</main>
		</>
	)
}
