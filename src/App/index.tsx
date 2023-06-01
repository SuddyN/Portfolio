import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppWrapper } from "./AppWrapper";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    );
  }
}
