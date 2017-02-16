// Require essential modules
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// Set initial state and display default value
// Chagne state using setState 
// Set setState to trigger when user press on submit button 
class User extends Component {
	
	constructor(props) {
	  super(props);

	  this.state = {
	    firstname: 'Win',
	    lastname : 'Myint',
	    age : 24
	  };

	  this.submit = this.submit.bind(this);
	}  


	submit(){
		this.setState({
			 firstname: this.refs.firstname.value,
	    	 lastname : this.refs.lastname.value,
	    	 age : this.refs.age.value
		})
	}

	render(){
		return(
			<div className="container">
				<div className="jumbotron">
					<h1>Please enter your information</h1>
					<div className="input-group">
        				<span className="input-group-addon">First Name</span>
        				<input type="text" name ="firstname" ref="firstname"
        				className="form-control" aria-describedby="basic-addon1" />
      				</div>
					<div className="input-group">
        				<span className="input-group-addon">Last Name</span>
        				<input type="text" name ="lastname" ref="lastname"
        				className="form-control" aria-describedby="basic-addon1" />
      				</div>
					<div className="input-group">
        				<span className="input-group-addon">Your Age</span>
        				<input type="number" name ="age" ref="age"
        				className="form-control" aria-describedby="basic-addon1" />
      				</div> <br />
					
					<RaisedButton label="Submit" primary={true} onClick={this.submit} />

					<hr />
					<h1>Result </h1>
			        <table className="table">
			          <thead>
			            <tr>
			              <th>First Name</th>
			              <th>Last Name</th>
			              <th>Age</th>
			            </tr>
			          </thead>
			          <tbody>
			            <tr>
			              <td>{this.state.firstname}</td>
			              <td>{this.state.lastname}</td>
			              <td>{this.state.age}</td>
			            </tr>
			          </tbody>
			        </table>
		        </div>
			</div>
		);
	}
}

// Export this component so i can require it in index.js
export default User;

