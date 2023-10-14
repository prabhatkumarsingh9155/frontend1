import React, { Component } from "react";
import ReactDOM from "react-dom";
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
      view: false,
    };
    this.countHandler = this.countHandler.bind(this);
  }

  countHandler() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter num={this.props.num + 1} />
      </React.StrictMode>,
      document.getElementById("renderHere")
    );
  }

  // mount method
  componentWillMount() {
    console.log("component will mount");
  }

  // static method -replaceplacement of component willmount
  static getDerivedStateFromProps(props, state) {
    // which receives the initial state and props in mount state
    // receive new props and new state on each sub sequent upadte
    
    console.log("get derived state from props");
    console.log(" props=",props);
    console.log(" props=",state);



  }


  componentDidMount() {
    console.log("component Did mount");
  }

// update stage
shouldComponentUpdate(np,ns){

  console.log("should component udate or not ");
  console.log(" new props=",np);
  console.log(" new state=",ns);


}

  render() {
    console.log("component rendered");
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-primary  display-1">Counter={this.props.num}</h3>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            {this.state.view ? (
              <h1 className="text-success"> welcome to LifeCycle</h1>
            ) : (
              <h1 className="text-secondary">NEED MORE COUNT </h1>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button
              onClick={() => this.countHandler()}
              className="btn btn-success"
            >
              ADD +1
            </button>
          </div>
        </div>
      </div>
    );
  }


  componentDidUpdate(op,os){

    console.log("component did update");
    console.log("  old props=",op);
    console.log(" old state=",os);



  }


  componentWillUnmount(){

console.log('component sucessfully unmounted')


  }
}
export default Counter;
