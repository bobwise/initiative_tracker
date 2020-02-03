import React, { Component } from "react";
import InitiativeOrder from "../InitiativeOrder/InitiativeOrder.js";
import "./App.scss";
import Divider from "../../assets/icons/Divider";

class App extends Component {
  constructor(props) {
    super(props);

    let entries = [];

    entries = [
      {
        id: 123,
        name: "Anya",
        initiative: 18
      },
      {
        id: 234,
        name: "Wizowski",
        initiative: 15
      },
      {
        id: 1233,
        name: "Milo",
        initiative: 15
      },
      {
        id: 23444,
        name: "Shandri",
        initiative: 15
      },
      {
        id: 2352334,
        name: "Raj",
        initiative: 12
      },
      {
        id: 22333333352334,
        name: "Xhauk",
        initiative: 12
      },
      {
        id: 223352334,
        name: "Kriv",
        initiative: 12
      }
    ]

    // Comment to include test data
    entries = [];

    this.state = {
      entries: entries,
      tipsVisible: true,
    };
  }

  render() {
    const { entries } = this.state;

    return (
      <main>
        <div className="App">
          <h1>Initiative Tracker</h1>
          <Divider />
          <InitiativeOrder
            initialEntries={entries}
          ></InitiativeOrder>
          {/* <a className="rulesLink" href="https://www.dndbeyond.com/sources/basic-rules/combat#Initiative">How does <strong>initiative</strong> work again?</a> */}

        </div>
        <aside>
          <p>by Bobwise</p>
        </aside>
      </main>
    );
  }
}

export default App;