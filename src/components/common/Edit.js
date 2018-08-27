import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import ReactFilestack from 'filestack-react';

// const filestackAPI = process.env.FILESTACK_API_KEY;

// const basicOptions = {
//   accept: 'image/*',
//   fromSources: ['local_file_system'],
//   maxSize: 1024 * 1024,
//   maxFiles: 1
// };

class UsersEdit extends React.Component {

    state = {
      user: null,
      errors: null,
      teams: null
    };


    componentDidMount(){
      let userData;
      let teamData;
      console.log(this.props);
      axios.get(`/api/users/${this.props.match.params.id}`)
        .then(res => userData = res.data)
        .then(() => {
          axios.get('/api/teams')
            .then(res => teamData = res.data)
            .then(() => this.setState({ user: userData, teams: teamData}));
        });
    }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

    axios
      .put(`/api/users/${id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/dashboard'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    const user = this.state.user;
    if(!this.state.user || !this.state.teams) return null;
    return (
      <div>
        <section className='section'>
          <div className="container">
            <form className="editform" onSubmit={this.handleSubmit}>
              <div className="field">
                <input
                  className="input"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={user.name}
                />
              </div>
              <div className="field">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={user.email}
                />
              </div>

              {/* <ReactFilestack
                apikey="AOMNdTfLRb2JoY4KejONwz"
                buttonText="Upload Photo"
                buttonClass="button redirectButton"
                options={basicOptions}
                onSuccess={this.onSuccess}
                onChange={this.handleChange}
                onError={this.onError}
              /> */}

              <p>AWAY TEAM </p><select
                className="select"
                name="favouriteTeam"
                placeholder=''
                onChange={this.handleChange}>
                <option value=''></option>
                {this.state.teams.map(team =>
                  <option
                    key={team._id}
                    value={team._id}
                  >{team.name}</option>
                )}
              </select>
              <hr />
              <button className="button submitButton">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }

}

export default UsersEdit;
