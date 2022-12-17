import React, { Component } from "react";
import styles from "./Card.module.css";
import up from "../assets/icons/chevron-up.svg";
import down from "../assets/icons/chevron-down.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  // state = {  }

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.card}>
        <section className={styles.container}>
          <img src={image} alt="avatar" loading="lazy" />
          <div className={styles.textContainer}>
            <h3>{name}</h3>
            <div className={styles.cost}>
              <p>
                {cost}{" "}
                {counter
                  ? `* ${counter} = ${counter * cost.split(" ")[0]} $`
                  : ""}
              </p>
              <div className={styles.parent}>
                <img src={up} alt="chevron up" onClick={this.upHandler} />
                <span>{counter}</span>
                <img
                  src={down}
                  alt="chevron down"
                  className={counter ? "" : styles.deactivate}
                  onClick={this.downHandler}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Card;
