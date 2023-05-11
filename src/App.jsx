import './App.css'
import profiles from './profiles.js'
import Profile from './Profile.jsx'

export default function Gallery() {

  return (
    <div>
      <h1>Notable Scientists</h1>

      {profiles?.map((profile, index) => (
        <Profile key={index} person={profile} />
      ))}

    </div>
  );
}

