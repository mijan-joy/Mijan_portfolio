import Footer from "./Footer/Footer";
import './Home.css';
import Profile from "./Profile/Profile";


export default function Home() {
  return (
    <div className="home-container">
      <Profile></Profile>
        <Footer></Footer>
    </div>
  )
}
