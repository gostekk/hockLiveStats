import React, { Component } from "react";

export default class NewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
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

  handleRedirect(e) {
    e.preventDefault();

    const name = this.state.name ? this.state.name.trim() : undefined;

    if(name) {
      this.props.history.push(`/${name}`);
    } else {
      console.log('Game id required');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            ref={name => (this.name = name)}
            placeholder="Team name or Game id"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <button type="submit">Create new</button>
          <button onClick={this.handleRedirect}>Redirect to old</button>
        </form>
      </div>
    );
  }
}
