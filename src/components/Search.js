import React, { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  // state = {  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <p>Search for the place where the happiness are being made.</p>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            required=""
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <label className={styles.userLabel}>Search ...</label>
        </div>
      </div>
    );
  }
}

export default Search;
