import React from "react";

import Navigation from "./components/Navigation/Navigation.component";
import Logo from "./components/Logo/Logo.component";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.component";
import Rank from "./components/Rank/Rank.component";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.component";
import Signin from "./components/Signin/Signin.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    };
  }
  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />

        <ImageLinkForm
          onButtonSubmit={this.onButtonSubmit}
          onInputChange={this.onInputChange}
        />

        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
