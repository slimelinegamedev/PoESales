import * as React from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Unregister from './Unregister/Unregister';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends React.Component { render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact={true} path="/" component={Body} />
          <Route path="/unregister" component={Unregister} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
