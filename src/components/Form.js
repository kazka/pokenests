import React from 'react'
import formService from '../services/form';
import { Card } from '@blueprintjs/core';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: '',
      location: '',
      city: '',
      thanks: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formdata = {
      pokemon: this.state.pokemon,
      location: this.state.location,
      city: this.state.city
    }

    formService.save(formdata)
      .then(nest => { this.setState({ thanks: true }) })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <Card className="form-area">
      {!this.state.thanks ?
        <form onSubmit={this.handleSubmit}>
          <div className="pt-form-group">

            <label>Name:</label>
            <input type="text" name="pokemon" className="pt-input" value={this.state.pokemon} onChange={this.handleChange}/>

            <label>Location:</label>
            <input type="text" name="location" className="pt-input" value={this.state.location} onChange={this.handleChange}/>

            <label>City:</label>
            <input type="text" name="city" className="pt-input" value={this.state.city} onChange={this.handleChange}/>

            <input type="submit" className="pt-button pt-large" value="Send"/>
          </div>
        </form>
        : <h4>Thank you!</h4>
      }
      </Card>
    );
  }
}

export default Form