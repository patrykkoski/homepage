import React, { Component } from "react";
import Spinner from '../../components/Spinner/Spinner';
import Navbar from "../../components/Navbar/Navbar";


class Main extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return(
        <Spinner />
      )
    }
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Main;
