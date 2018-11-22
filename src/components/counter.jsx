import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  componentDidUpdate(previousProps, previousState) {
    console.log("revious Props:", previousProps);
    console.log("revious state:", previousState);
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.length === 0) return null;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // handleIncrement = product => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    console.log("Counter - Rendered.");

    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Icrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
