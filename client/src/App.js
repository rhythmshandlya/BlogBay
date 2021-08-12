// import FullPageCard from './Components/BlogCards/FullPageCard';
// import Profile from './Components/ProfileComponent/Profile';
// import Card from './Components/BlogCards/ShoppingCard';
import ZoomCard from './Components/BlogCards/ZoomCard';
// import EasyCard from './Components/BlogCards/EasyCard';
// import AnimatedCard from './Components/BlogCards/AnimatedCard';
// import CardExplore from './Components/BlogCards/CardExplore';
import Navbar from './Components/NavbarComponents/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage/LoginPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.css';

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/login' component={LoginPage}/>
    </Switch>   
    </Router>
    </>
  );
}
export default App;
