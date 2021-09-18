// import logo from './logo.svg';
import './App.scss';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import CodeChallenge from './components/CodeChallenge/CodeChallenge';
import WorkFaster from './components/WorkFaster/WorkFaster';
import SharePhotos from './components/SharePhotos/SharePhotos';
import ChallengeTips from './components/ChallengeTips/ChallengeTips';
import Products from './components/Products/Products';
import Devices from './components/Devices/Devices';
import Subscribe from './components/Subscribe/Subscribe';
import ContactUs from './components/ContactUs/ContactUs';
import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    let direction = "ltr"
    var bodyElement = document.querySelector("body");
    bodyElement.classList.add(direction);
    bodyElement.style.direction = direction;
    var htmlElement = document.querySelector("html");
    htmlElement.style.overflowX = "hidden";
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <CodeChallenge />
        <WorkFaster />
        <SharePhotos />
        <ChallengeTips />
        <Products />
        <Devices />
        <Subscribe />
        <ContactUs />
      </div>
    );
  }

}

export default App;
