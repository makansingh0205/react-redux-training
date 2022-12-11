import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './screens';
import PageNotFound from './components/NoFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
