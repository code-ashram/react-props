import { getImageUrl } from './utils.js'

const Profile = ({ person: { name, imageId, profession, awards, discovered } }) => {

  // const {name, imageId, profession, awards, discoveries} = person

  return <section className={'profile'}>
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>
        ({awards.join(', ')})
      </li>
      <li>
        <b>Discovered: </b>
        {discovered}
      </li>
    </ul>
  </section>
}

export default Profile
