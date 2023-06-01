import "./App.css";
import React from "react";

interface AppState {}
interface AppProps {}

export class App extends React.Component<AppState, AppProps> {
  render(): React.ReactNode {
    return <>It works</>;
  }
}
