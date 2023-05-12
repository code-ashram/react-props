import './App.css'

const Card = ({ children }) => (
  <div className="card">
    <div className="card-content">
      {children}
    </div>
  </div>
)

const Profile = () => (
  <div>
    <Card>
      <h1>Photo</h1>

      <img
        className="avatar"
        src="https://i.imgur.com/OKS67lhm.jpg"
        alt="Aklilu Lemma"
        width={70}
        height={70}
      />
    </Card>

    <Card>
      <h1>About</h1>

      <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
    </Card>
  </div>
)

export default Profile
