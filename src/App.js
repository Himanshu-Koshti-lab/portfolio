import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="App-header">Welcome From Himanshu Koshti</h1>
        <nav className="nav-bar navbar-expand-lg navbar-light bg-light ">
          <ul className="navbar-nav">
            <li>
              <Link to={"/"} className="nav-link ">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/About"} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/Contact"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
