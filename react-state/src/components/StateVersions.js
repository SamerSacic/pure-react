import React from "react";
import Button from "./Button";

class StateVersions extends React.Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
  }
  state = {
    count: 3,
  };

  handleAction() {
    // Passing object to setState function
    // this.setState({
    //   count: this.state.count + 1,
    // });

    // functional setState
    // Functional setState is the preferred way to call setState because it’s guaranteed to work correctly, every
    // time. Try to use it whenever you can.
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Button onAction={this.handleAction} />
      </div>
    );
  }
}

export default StateVersions;
