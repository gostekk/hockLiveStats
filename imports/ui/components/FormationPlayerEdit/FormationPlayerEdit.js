import React from 'react'
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';

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
      <div className="row">
        <form onSubmit={this.handleSubmit} noValidate>
	        <div className='form-row'>
            <input 
              type='text' 
              className='form-control col-md-12 col-lg-8' 
              name="name"
              ref={name => (this.name = name)}
              placeholder="Player name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button className='btn btn-outline-success col-md-6 col-lg-2' type="submit">&#x2713;</button>
            <button className='btn btn-outline-danger col-md-6 col-lg-2' onClick={this.handleAbort}>&#x2717;</button>
          </div>
        </form>
      </div>
    )
  }
}

FormationPlayerEdit.propTypes = {
  player_id: PropTypes.string.isRequired,
  formation_id: PropTypes.string.isRequired
};

export default FormationPlayerEdit;