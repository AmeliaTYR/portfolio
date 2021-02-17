import React from 'react';
import BannerImage from './components/Banner/BannerImage';
import StatusBar from './components/StatusBar';
import ContentArea from './components/ContentArea';
import AppContext from './components/AppContext';

import WorkExperience from './components/WorkExperience/WorkExperience'

import logo from './logo.svg';
import './App.css';
// import banner_img from './components/Banner/portfolio-website-header.png';

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

              {/* create a div to store a cover image (see how they make it cover the whole screen until scroll with
                the scroll down option) here */}
  
            <div className="App">
              {/* To replace the banner image with the overview segment with the automated scrolling display */}
              <BannerImage /> 
              
              <div>
                <h1>Welcome to My Photo Journal</h1>
              </div>

              <StatusBar />
              
              <ContentArea /> 
              {/* Add a segment with contacts and links to stuff at the bottom */}

              

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
