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
import SignupPage from './Components/LoginPage/SignupPage';
import { BrowserRouter as Router, Route, Switch, DefaultRoute } from 'react-router-dom';
import './app.css';
import Commingsoon from './Components/Extras/Commingsoon';
import P404 from './Components/Extras/P404';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/tutorial" component={Commingsoon} />
          <Route path='*' component={P404} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
