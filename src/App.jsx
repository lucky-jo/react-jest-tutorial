import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import { Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";
import Button from "./components/Button/Button";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Switch>
      <Button />
    </div>
    // </BrowserRouter>
  );
};

export default App;
