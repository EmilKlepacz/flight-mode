import React, { Component } from "react";

import "./App.css";
import Particles from "react-particles-js";
import AppBarWithButton from "./components/AppBarWithButton";
import Content from "./components/Content";
import IframeTop from "./components/IframeTop";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Link  } from "react-router-dom";
import IframeAll from "./components/IframeAll";


var title = "FLIGHT-MODE: listen - dance - worship satan";

const particlesOpt = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#8cfd09"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#8cfd09"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8cfd09",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 1078.9210789210788,
        "line_linked": {
          "opacity": 0.06476107211954897
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true

};

class App extends Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <BrowserRouter>
        
        <div className="App">
          <AppBarWithButton className="App-Bar" />
          <IframeTop />

          <Route path="/all-episodes"  component={IframeAll} />

          <div className="frame-layout__wrapper">
          <Route path="/" exact component={Content} />
          

          {/* <Content /> */}
            <div className="frame-layout__particles-container">
              <Particles className="frame-layout__particles" params={particlesOpt} />
            </div>

          </div>  
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
