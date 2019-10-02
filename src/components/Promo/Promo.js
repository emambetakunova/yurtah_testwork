import React from 'react';

import './Promo.css';

const Promo = ({children}) => {
  return (
    <div className="Promo">
      <div className="Container"/>
      <p className="PromoText">Best ever camp for your child</p>
      {children}
    </div>
  )
};

export default Promo;