import React from "react";
import "./App.css";

interface AppState {}
interface AppProps {}

export class App extends React.Component<AppState, AppProps> {
  render(): React.ReactNode {
    return <>It works</>;
  }
}
