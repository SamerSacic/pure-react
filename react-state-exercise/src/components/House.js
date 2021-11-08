import React from "react";

class House extends React.Component {
  constructor(props) {
    super(props);

    this.handleLight = this.handleLight.bind(this);

    this.state = {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    };
  }

  // handleLight(event) {
  //   if (event.target.value in this.state) {
  //     this.setState((prevState) => ({
  //       [event.target.value]: !prevState[event.target.value],
  //     }));
  //     // this.setState((prevState) => {
  //     //   console.log(prevState[event.target.value]);
  //     // });
  //   }
  // }

  // TODO: DRY
  // TODO: Refactor method to dynamically check state property and replace the property value
  handleLight(event) {
    if (event.target.value === "kitchen") {
      this.setState((prevState) => ({
        kitchen: !prevState.kitchen,
      }));
    } else if (event.target.value === "bathroom") {
      this.setState((prevState) => ({
        bathroom: !prevState.bathroom,
      }));
    } else if (event.target.value === "livingRoom") {
      this.setState((prevState) => ({
        livingRoom: !prevState.livingRoom,
      }));
    } else if (event.target.value === "bedroom") {
      this.setState((prevState) => ({
        bedroom: !prevState.bedroom,
      }));
    }

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLight} value="kitchen">
          Kitchen Light {this.state.kitchen ? "ON" : "OFF"}
        </button>
        <br />
        <br />
        <button onClick={this.handleLight} value="bathroom">
          Bathroom Light {this.state.bathroom ? "ON" : "OFF"}
        </button>
        <br />
        <br />
        <button onClick={this.handleLight} value="livingRoom">
          Living Room Light {this.state.livingRoom ? "ON" : "OFF"}
        </button>
        <br />
        <br />
        <button onClick={this.handleLight} value="bedroom">
          Bedroom Light {this.state.bedroom ? "ON" : "OFF"}
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default House;
