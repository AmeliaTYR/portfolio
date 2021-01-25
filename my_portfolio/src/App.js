import React from 'react';
import BannerImage from './components/BannerImage';
import StatusBar from './components/StatusBar';
import ContentArea from './components/ContentArea';
import AppContext from './components/AppContext';

import logo from './logo.svg';
import './App.css';



class App extends React.Component {

  // Task 6
    componentDidMount() {
      console.log("App.componentDidMount( )");
  
      // at this point, both the StatusBar and the UserManagher have rendered
      // let's connect them!
  
      // Task 7
      this.userManager.idChangeSubscribe(this.statusBar.handleUserIdChange);
    }
  
    constructor(props) {
      super(props)
  
      console.log("App.constructor( )");
  
      // Task 7
      this.statusBar = null;
      this.userManager = null;
    }
  
    render() {
        return (
  
            <AppContext.Provider value={ this }>
  
            <div className="App">
              <BannerImage />
              <div>
                <h1>Welcome to My Photo Journal</h1>
              </div>
              <StatusBar />
              <ContentArea />
            </div>

            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
  
            </AppContext.Provider>

            
  
        );
      }
  
    }

export default App;
