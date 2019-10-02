import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import CardOfCamp from "../../components/CardOfCamp/CardOfCamp";

import './Home.css'
import ListingsForm from "../../components/ListingsForm/ListingsForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Promo>
          <ListingsForm/>
        </Promo>
        <div className="Container">
          <div className="CardOfCamp">
            {this.props.listings.map((camp) => (
              <CardOfCamp
                key={camp.id}
                image={camp.objects[4].data.small.jpeg}
                title={camp.slug}
                price={camp.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.listings
});

export default connect(mapStateToProps, null)(Home);