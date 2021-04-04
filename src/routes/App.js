import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import InfoTask from '../pages/InfoTask'
import NotFound from '../pages/NotFound'

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/task/:id' component={InfoTask} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default App
