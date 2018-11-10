import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../common/Admin';

const leftPanel = ({user, weeks}) => {
  console.log('this is user on the component', user);
  return(
    <div className="leftProfileContainer" style={{
      backgroundColor:
      user.favouriteTeam ?
        `${user.favouriteTeam.tertiaryColor}B3` : 'black'
    }}>
      <div className="profilePic" style={{backgroundImage: `url(${user.profilePic})`}} />
      <p className="highlightText size30" style={{
        color:
        user.favouriteTeam ?
          `${user.favouriteTeam.secondaryColor}` : '#013369'
      }}>{user.name}</p>
      <p className="standardText">{user.city}</p>
      <div className="teamLogoSmall" style={{
        backgroundImage:
        user.favouriteTeam ?
          `url(/assets/images/${user.favouriteTeam.logo})` :
          'url(/assets/images/nfl.png)'}}/>
      <p className="standardText">Favourite Team</p>
      <p className="highlightText size20" style={{
        color: user.favouriteTeam ?
          `${user.favouriteTeam.secondaryColor}` : '#013369'
      }}
      >{user.favouriteTeam ? user.favouriteTeam.name : <small>Edit profile to choose your favourite team</small>}</p>
      <Link to={`/users/${user._id}/edit`} className='button standardText editProfile' style={{
        backgroundColor:
        user.favouriteTeam ?
          `${user.favouriteTeam.primaryColor}` : '#D50A0A',
        color: user.favouriteTeam ?
          `${user.favouriteTeam.secondaryColor}` : '#013369'
      }}>Edit profile</Link>
      {user.admin && <Admin weeks={weeks}/> }
    </div>
  );
};

export default leftPanel;
