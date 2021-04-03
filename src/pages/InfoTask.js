import React from 'react';
import '../styles/InfoTask.css';

class InfoTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}
	componentDidMount() {
		//this.fetchData();
	}

	/* fetchData = async () => {
		try {
			const data = await applicationCache.task.read(this.props.match.params.id);
			this.setState({
				data: data,
			});
		} catch (error) {
			console.log(error);
		}
	}; */

	render() {
		return (
			<div>
				<h1>Hello form info task</h1>
				<p>{this.state.data.description}</p>
			</div>
		);
	}
}
export default InfoTask;
