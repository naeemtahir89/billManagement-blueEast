import React, { Compunent } from 'react';
import { View, Text, Scene } from 'react-native-router-flux';

import Home from './Screens/Home';

class RouterCompunent extends Compunent {
	state = {};
	render() {
		return (
			<Router>
				<Scene key="root" />
			</Router>
		);
	}
}
