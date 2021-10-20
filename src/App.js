import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage/BlogPage';
import PageNotFound from './components/PageNotFoound/PageNotFound';
import ServicePage from './components/ServicePage/ServicePage';
import Navmenu from './Shared/Navmenu/Navmenu';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import Apointment from './components/Apointment/Apointment';
import Footer from './components/Footer/Footer';
import SignUp from './components/Home/Login/SignUp';
import OurBlogs from './components/OurBlogs/OurBlogs'
import AboutUs from './components/AboutUs/AboutUs';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navmenu></Navmenu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/blog/:blogId'>
            <BlogPage></BlogPage>
          </Route>
          <OurBlogs path="/blogs"/>
          <PrivateRoute path='/service/:serviceId'>
            <ServicePage></ServicePage>
          </PrivateRoute>
          <PrivateRoute path="/apointment"><Apointment></Apointment></PrivateRoute>
          <Route path="/about"><AboutUs></AboutUs></Route>
          <Login path='/login'></Login>
          <SignUp path="/signup"/>
          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      </div>
  );
}

export default App;
