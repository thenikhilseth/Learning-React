import React, { Component } from "react";
import BmwChild from "./BmwChild";

export default class CarParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carCategory: "Sedan",
    };

    this.carModel = this.carModel.bind(this); //Binding
  }

  carModel(carBrand) {
    alert(
      `The car ${carBrand} comes under the ${this.state.carCategory} category`
    );
  }

  render() {
    return (
      <div>
        <BmwChild carCategoryHandler={this.carModel} />
      </div>
    );
  }
}
