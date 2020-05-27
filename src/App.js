import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      beers: [],
    };
  }
  likedBeer = () => {
    this.setState({ liked: !this.state.liked });
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => this.setState({ beers: data }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.beers.map((beer) => (
            <li>
              <img alt="beer_image" src={beer.image_url}></img>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <button onClick={this.likedBeer}>Like</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
