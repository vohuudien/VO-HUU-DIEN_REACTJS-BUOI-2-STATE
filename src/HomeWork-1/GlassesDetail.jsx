import React, { Component } from "react";
import data from "./data.json";

console.log(data[0].id);

export default class GlassesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: "/glassesImage/v1.png",
      name: data[0].name,
      price: data[0].price,
    };
  }
  // renderGlassesList = () => {
  //   return data.map((glassesItem) => {
  //     return (
  //       <div key={glassesItem.id}>
  //         <img
  //           className="ml-4 p-3 border border-width-1"
  //           style={{ width: "120px", cursor: "pointer" }}
  //           src={glassesItem.url}
  //         />
  //       </div>
  //     );
  //   });
  // };

  changeColor = (color, newData) => {
    const newImgUrl = `/glassesImage/${color}.png`;
    const newName = data[newData].name;
    const newPrice = data[newData].price;
    this.setState({ imgUrl: newImgUrl, name: newName, price: newPrice });
  };

  render() {
    const infoGlasses = {
      width: "250px",
      bottom: "122px",
      left: "192px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,121,0, 0.5)",
      textAlign: "left",
      height: "105px",
    };
    return (
      <div
        // THẺ BACKGROUND
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          minHeight: "1000px",
          backgroundSize: "1500px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h3
            style={{ backgroundImage: "rgba(148,0,211,8)" }}
            className="text-center text-primary pd-5"
          >
            TRY GLASSES ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="/glassesImage/model.jpg"
                    alt=""
                  />
                  <img
                    style={{
                      width: "150px",
                      right: "120px",
                      top: "65px",
                      opacity: 0.9,
                    }}
                    className="position-absolute"
                    src="/glassesImage/v1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="/glassesImage/model.jpg"
                  alt=""
                />
                <img
                  style={{
                    width: "150px",
                    right: "432px",
                    top: "150px",
                    opacity: 0.9,
                  }}
                  className="position-absolute"
                  src={this.state.imgUrl}
                  alt=""
                />
                <div style={infoGlasses} className="position-relative">
                  <p>Name:{this.state.name}</p>
                  <span>Price:{this.state.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-light container text-center mt-5 d-flex justify-content-center">
              <img
                onClick={() => this.changeColor("v1", 0)}
                className="ml-4 p-3 border border-width-1 "
                src="./glassesImage/v1.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v2", 1)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v2.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v3", 2)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v3.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v4", 3)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v4.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v5", 4)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v5.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v6", 5)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v6.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v7", 6)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v7.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v8", 7)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v8.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
              <img
                onClick={() => this.changeColor("v9", 8)}
                className="ml-4 p-3 border border-width-1"
                src="./glassesImage/v9.png"
                style={{ width: "120px", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
