import { Component } from "react";

class ClassComponent extends Component {
  render() {
    const {
      task: { title },
    } = this.props;

    return (
      <div>
        <h2>Class component</h2>
        <p>{title}</p>
      </div>
    );
  }
}

export default ClassComponent;
