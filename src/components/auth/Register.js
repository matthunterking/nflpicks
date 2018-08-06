import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthRegister extends React.Component {
  state: {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('api/register', this.state)
      .then(res =>  {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.replace('/register');
      });
  }

  render() {
    return (<div>
      <p>Register!</p>
      <form onSubmit={this.handleSubmit}>
        <div className='columns'>
          <div className='column'>
            <div className="field">
              <input
                className="input"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <input
                className="input"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
    );
  }
}

export default AuthRegister;
