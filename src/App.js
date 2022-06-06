
import './App.css';
import Adduser from './AddUser/Adduser';
import Home from './Home/Home';
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from './NavBar/Navbar';
import EditContact from './EditUser/Edituser';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <Navbar />
    <Switch>
    <Route exact path="/" component={() => <Home />} />
    <Route exact path="/add" component={() => <Adduser/>} />
    <Route exact path="/edit/:id" component={() => <EditContact />} />
    </Switch>
  </div>
);
};
export default App;
