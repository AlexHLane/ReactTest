import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: [], //"tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags available</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //don't need to save this as a variable, but this is what the original lines get replaced to
    //let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 &&
          "please create a new tag (except you can't do that yet hehehe)"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    //originally inside the render method, but makes it bulky and want to abstract it. highlighted 2 lines, right clicked, and chose refactor and it automatically pulled it into a new method with a variable assigned above with the return state of the method
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "success";
    return classes;
  }

  //name of the attribute in jsx is className, not class, as the class keyword is used for JavaScript
  //"badge badge-primary m-2" has all to do with bootstrap, so look up bootstrap for more information
  //can do style by setting it above with an object such as styles={fontSize: "15px", fontWeight:"bold"} with <span style={this.styles}...>  OR it can be done inline: <span style={{fontSize:15}}..>

  formatCount() {
    //this is called object destructuring, getting the count property out of this object, this.state, and storing it into a different const called count
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
