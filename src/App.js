import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import styled from "styled-components";


function App() {
  return (
    <div className="app">
      <h1>Slack clone w/ redux</h1>
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* Chat */}
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;