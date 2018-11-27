import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import SubMenu from '../partials/UserShowSubMenu';
import LeftPanel from '../partials/UserShowLeftPanel';

import ReactFilestack from 'filestack-react';

const filestackAPI = process.env.FILESTACK_API_KEY;

const basicOptions = {
  accept: 'image/*',
  fromSources: ['local_file_system'],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

class UsersEdit extends React.Component {

    state = {
      user: null,
      errors: null,
      teams: null
    };


    componentDidMount(){
      let userData;
      let weeks;

      function updateData() {
        weeks = userData.picks.map(pick => parseInt(pick.week) + 1);
        weeks = [1].concat(weeks).filter((week, index, array) => week !== array[index-1]);
      }

      axios
        .get(`/api/users/${Auth.getPayload().sub}`)
        .then(res => userData = res.data)
        .then(() => updateData())
        .then(() => {
          return axios
            .get('/api/teams')
            .then(res =>
              this.setState({
                teams: res.data,
                user: userData,
                weeks: weeks
              }, () => console.log('this is the state',this.state)));
        });
    }

    onSuccess = (result) => {
      this.setState({
        profilePic: result.filesUploaded[0].url
      });
    }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value }, () => {
      console.log('------>', this.state);
    });
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
        {user && <div className="container userShowContainer">
          <div className="columns">
            <div className="column is-one-quarter">
            </div>
            <div className="column is-three-quarters">
              <SubMenu currentWeek={this.state.weeks[this.state.weeks.length - 1]} />
            </div>
          </div>
          <div className="columns">
            <LeftPanel user={user} weeks={this.state.weeks}/>
            <div className='column is-four-fifths centralColumn'>
              <div className="middleProfileContainer" style={{
                backgroundColor:
                user.favouriteTeam ?
                  `${user.favouriteTeam.tertiaryColor}B3` : 'black'
              }}>
                <div className="topPanelTopLine">
                  <p className="standardText">Edit Profile</p>
                </div>
                <hr />
                <div>
                  <form className="editform" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label htmlFor="name" className="label standardText">Name</label>
                      <div className="control">
                        <input
                          className="input"
                          name="name"
                          type="text"
                          placeholder="Name"
                          onChange={this.handleChange}
                          value={this.state.name || user.name}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="email" className="label standardText">Email</label>
                      <div className="control">
                        <input
                          className="input"
                          name="email"
                          type="text"
                          placeholder="Email"
                          onChange={this.handleChange}
                          value={this.state.email || user.email}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="city" className="label standardText">City</label>
                      <div className="control">
                        <input
                          className="input"
                          name="city"
                          type="text"
                          placeholder="Email"
                          onChange={this.handleChange}
                          value={this.state.city || user.city}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="profilePic" className="label standardText">Profile Picture</label>
                        <div className="control">
                          <input
                            className="input"
                            name="profilePic"
                            type="text"
                            placeholder="Profile Picture"
                            onChange={this.handleChange}
                            value={this.state.profilePic || user.profilePic}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="favouriteTeam" className="label standardText">Favourite Team</label>
                      <div className="control">
                        <select
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
                      </div>
                    </div>


                    <ReactFilestack
                      apikey= {filestackAPI}
                      buttonText="Upload Profile Picture"
                      buttonClass="button redirectButton"
                      options={basicOptions}
                      onSuccess={this.onSuccess}
                      onChange={this.handleChange}
                      onError={this.onError}
                    />

                    <hr />
                    <button className="button submitButton">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }

}

export default UsersEdit;
