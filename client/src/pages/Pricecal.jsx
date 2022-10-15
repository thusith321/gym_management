import React from "react";
import "./price-style.css";

export default class Salarcal extends React.Component {
  state = { EqPrice: "", Dicount: "", nitems: "", Salary: "" };
  constructor(props) {
    super(props);
    this.state = { EqPrice: "", Dicount: "", nitems: "", Salary: "" };
  }

  exe1() {
    console.log(
      "EqPrice: ",
      this.state.EqPrice,
      " + Dicount: ",
      " - nitems: ",
      this.state.Dicount
    );
    this.setState({
      Salary:
        (parseInt(this.state.EqPrice) * parseInt(this.state.nitems)) -
        (parseInt(this.state.Dicount)),
    });
    console.log(this.state);
  }

  render() {
    return (
    <div className="containerC">
      <div className="mainContainerA">
        <h1 className="inn">Equipment Price Calculator</h1>
    

        <h3>Price</h3>
        <input
        
          type="textt"
          className="inputStylee"
          value={this.state.EqPrice}
          onChange={(eve) => {
            this.setState({ EqPrice: eve.target.value });
          }}
        />
        <br />
        <br />

        <h3>Discount   </h3>
        <input
            
          type="textt"
          className="inputStylee"
          value={this.state.Dicount}
          onChange={(eve) => {
            this.setState({ Dicount: eve.target.value });
          }}
        />
        <br />
        <br />

        <h3>Number Of Items   </h3>
        <p></p>

        <input
          type="textt"
          
          className="inputStylee"
          value={this.state.nitems}
          onChange={(eve) => {
            this.setState({ nitems: eve.target.value });
          }}
        />
        <br />
        <br />

        <button
        className="btn btn-warning"
          onClick={() => {
            this.exe1();
          }}
        >
          Calculate the Price of equipment
        </button>
        <br />
        <br />

        <input type="textt" className="outStyle" value={this.state.Salary} />

        <br />
        <br />
      </div>
      </div>
    );
  }
}
