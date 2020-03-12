import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const CoinDetails = () => {
    const params = useParams();
    const [coin, setCoin] = useState();

    useEffect(() => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=en&market_data=false&community_data=false&developer_data=false&sparkline=false`
          )
          .then(response => {
              //console.log(response.data)
              setCoin(response.data);
          })
          .catch(err => console.log(err));
      }, []);

    return (
        !coin ? <Loader /> :
        <>
            <h2>{coin.name}</h2>
            <h3>Most recently valued at: {coin.tickers[0]["last"]}</h3>
            <p>Around since: {coin.genesis_date}</p>
            <h3>About</h3>
            <p>{coin["description"]["en"]}</p>
            <p>Learn More: <a href={`${coin.links.homepage[0]}`}>{coin.links.homepage[0]}</a></p>
        </>
    )
}

export default CoinDetails;