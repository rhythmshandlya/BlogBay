import Navbar from './Components/NavbarComponents/Navbar';
//import LoginPage from './Components/LoginPage/LoginPage';
//import Profile from './Components/ProfileComponent/Profile.jsx';
//import Card from './Components/BlogCards/Card1x2';
//import Card2 from './Components/BlogCards/Card1x2_2';
import './app.css';
import cardLong from './Components/BlogCards/cardLong';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <LoginPage /> */}
      {/* <Profile></Profile> */}
      {/* <Card /> */}
      {/* <Card2 /> */}
      <cardLong />
    </>
  );
}
export default App;
