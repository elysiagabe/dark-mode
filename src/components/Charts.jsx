import React from "react";
import Chart from "./Chart";
import { Link } from 'react-router-dom';

const Charts = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className="charts">
      {coinData.map(coin => (
        
        <div className="chart__container" key={coin.name}>
          <Link to="/bitcoin"><h2 className="coin__title">{coin.name}</h2></Link>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
