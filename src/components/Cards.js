import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";

import tehran from "../assets/images/tehran.jpg";
import kordestan from "../assets/images/kordestan.jpg";
import sistanAndBaluchestan from "../assets/images/sistanandbaluchestan.jpg";
import gilan from "../assets/images/gilan.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      receivedData: [
        { id: 1, image: tehran, name: "Tehran", cost: "270 $" },
        { id: 2, image: sistanAndBaluchestan, name: "Sistan And Baluchestan", cost: "273 $" },
        { id: 3, image: gilan, name: "Gilan", cost: "264 $" },
        { id: 4, image: kordestan, name: "Kordestan", cost: "289 $" },
      ],
    };
  }
  // state = {  }
  render() {
    return (
      <main className={styles.main}>
        {this.state.receivedData.map((data) => {
          return (
            <Card
              key={data.id}
              image={data.image}
              name={data.name}
              cost={data.cost}
            />
          );
        })}
      </main>
    );
  }
}

export default Cards;
