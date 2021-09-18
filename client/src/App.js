import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/LoginPage/SignupPage';
import Profile from './Components/ProfileComponent/Profile.jsx';
import Blog from './Components/BlogPages/BlogPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Commingsoon from './Components/Extras/Commingsoon';
import P404 from './Components/Extras/P404';
import BlogEditor from './Components/Editor/BlogEditorV1.0.2';
import BlogPagePreview from './Components/BlogPages/BlogPagePreview';
import settings from './Components/SettingsComponent/settingsPage';
import BlogSearch from './Components/BlogSearch/BlogSearch.jsx';
import BlogPage from './Components/BlogPage/BlogPage'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/tutorial" component={Commingsoon} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editor" component={BlogEditor} />
          <Route exact path="/preview" component={BlogPagePreview} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/settings" component={settings} />
          <Route exact path="/blog" component={BlogSearch} />
          <Route path="*" component={P404} />
        </Switch>
      </Router>
      {console.clear()}
    </>
  );
}
export default App;
