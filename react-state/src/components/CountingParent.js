import React from "react";
import Button from "./Button";
import ResetButton from "./ResetButton";

class CountingParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actionCount: 0,
    };

    this.handleAction = this.handleAction.bind(this);
    this.handleResetAction = this.handleResetAction.bind(this);
  }

  handleAction(action) {
    console.log("Child says: ", action);

    this.setState({
      actionCount: this.state.actionCount + 1,
    });
  }

  handleResetAction() {
    this.setState({
      actionCount: 0,
    });
  }

  render() {
    return (
      <div>
        <Button onAction={this.handleAction} />
        <ResetButton onAction={this.handleResetAction} />
        <p>Clicked {this.state.actionCount} times.</p>
      </div>
    );
  }
}

export default CountingParent;
