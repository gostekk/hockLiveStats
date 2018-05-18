import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class NewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.state.name ? this.state.name.trim() : undefined;

    Meteor.call("game.insert", name, (error, _id) => {
      if (error) {
        console.log(error.reason);
        this.setState({
          error: error.reason
        });
      } else {
        this.setState({
          name: "",
          error: ""
        });
        this.props.history.push(`/${_id}`);
      }
    });
  }

  handleNameChange(e) {
    const name = e.target.value;
    this.setState({ name });
  }

  render() {
    return (
      <div>
        NewGame
        <form onSubmit={this.handleSubmit} noValidate>
          <label>Team name</label>
          <input
            type="text"
            name="name"
            ref={name => (this.name = name)}
            placeholder="Team name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
