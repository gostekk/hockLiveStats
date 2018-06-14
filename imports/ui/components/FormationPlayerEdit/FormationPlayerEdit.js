import React from 'react'
import { Session } from 'meteor/session';

class FormationPlayerEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: "",
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAbort = this.handleAbort.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.state.name ? this.state.name.trim() : undefined;

    console.log(name);
    Meteor.call('player.editName', this.props.player_id, this.props.formation_id, name, (error, _id) => {
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
        Session.set('playerEditId', undefined);
      }
    });
  }

  handleNameChange(e) {
    const name = e.target.value;
    this.setState({ name });
  }

  handleAbort(e) {
    e.preventDefault();

    Session.set('playerEditId', undefined);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="input-group">
            <input 
              type="text"
              className="form-control"
              name="name"
              ref={name => (this.name = name)}
              placeholder="Player name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
              <div className="input-group-append">
                <button className="btn btn-outline-success" type="submit">C</button>
                <button className="btn btn-outline-danger" onClick={this.handleAbort}>X</button>
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormationPlayerEdit;