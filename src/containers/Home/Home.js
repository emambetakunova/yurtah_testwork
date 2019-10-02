import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Promo/>
      </div>
    );
  }
}

export default Home;