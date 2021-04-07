import React from 'react'
import './Coin.css'

function Coin({name, image, symbol, price, volume, priceChange, marketcap}) {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">HUF {price.toLocaleString()}</p>
                    <p className="coin-voume">HUF {volume.toLocaleString()}</p>
                    {priceChange < 0 ? 
                    (
                        <p className="price-change red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="price-change green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">mkt cap: HUF {marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
