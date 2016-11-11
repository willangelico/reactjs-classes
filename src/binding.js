const Binding = React.createClass({
	render: function()
	{
		return(
			<div>
				<input 
					type="text" 
					ref="binding" 
					value={this.state.binding}
					onChange={this.refresh}
				/>
				<hr />
				<p>{this.state.binding} x 2 = {this.state.binding*2}</p>
			</div>
		);
	},

	refresh: function(){
		this.setState({
			binding: this.refs.binding.value
		});
	},

	getInitialState: function(){
		return{
			binding: 'Initial data...'
		};
	}

});

ReactDOM.render(<Binding />, document.getElementById('binding'));