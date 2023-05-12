import './App.css'
import { getImageUrl } from './utils.js';

const Avatar = ({ person, size }) => (
  <img
    className="avatar"
    src={getImageUrl(person, size < 90 ? 's' :'b')}
    alt={person.name}
    width={size}
    height={size}
  />
)

const Profile = () => (
  <Avatar
    size={40}
    person={{
      name: 'Gregorio Y. Zara',
      imageId: '7vQD0fP'
    }}
  />
)

export default Profile
