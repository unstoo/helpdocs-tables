import React from 'react'
import { hot } from 'react-hot-loader'
import { setConfig } from 'react-hot-loader'
import Toolbar from './Toolbar'
import ContainerWidth from './ContainerWidth'

const App = () => {     
    return (
<div className='layout'>
    <table className="table">
      <caption className="table__caption">Card deposits</caption>
      <tbody className="table__body">
        <tr className="table__row">
          <th className="table__cell--heading" colSpan="2">Fee</th>
          <td className="table__cell">4%</td>
        </tr>
        <tr className="table__row">
          <th className="table__cell--heading" colSpan="2">Minimum deposit</th>
          <td className="table__cell">10 EUR/USD/GBP</td>
        </tr>
        <tr className="table__row">
          <th className="table__cell--heading" colSpan="2">Maximum daily</th>
          <td className="table__cell">1,000 EUR/USD/GBP</td>
        </tr>
        <tr className="table__row">
          <th className="table__cell--heading" colSpan="2">Maximum monthly</th>
          <td className="table__cell">5,000 EUR/USD/GBP</td>
        </tr>
        <tr className="table__row  table__row--last">
          <td className="table__cell--one-third"><span className="table__requirement">3D Secure</span></td>
          <td className="table__cell--one-third"><span className="table__requirement">Verification</span></td>
          <td className="table__cell--one-third"><span className="table__requirement">Your own card</span></td>
        </tr>
      </tbody>
    </table>
    
    <br/> <br/>
    <br/> <br/>

    <figure className="figure">
      <figcaption className="figure__caption">Exchange rates</figcaption>
      <div className="diagram">
        <div className="diagram__left-col">
          <span className="diagram__label">BTC</span>
          <span className="diagram__label">LTC</span>
          <span className="diagram__label">EUR</span>
          <span className="diagram__label">USD</span>
          <span className="diagram__label">GBP</span>
        </div>
        <div className="diagram__mid-col">
          <span className="diagram__label  diagram__label--mid">1%</span>
        </div>
        <div className="diagram__right-col">
            <span className="diagram__label  diagram__label--right">EUR</span>
            <span className="diagram__label  diagram__label--right">USD</span>
            <span className="diagram__label  diagram__label--right">GBP</span>
            <span className="diagram__label  diagram__label--right">LTC</span>
            <span className="diagram__label  diagram__label--right">BTC</span>
        </div>
      </div>
    </figure>

    <br/> <br/>
    <br/> <br/>

    <table className="table  table--narrow">
        <caption className="table__caption">SEPA bank deposits</caption>
        <tbody className="table__body">
          <tr className="table__row">
            <th className="table__cell">Deposits limit</th>
            <th className="table__cell">EUR/USD/GBP</th>
          </tr>
          <tr className="table__row">
            <td className="table__cell">Minimum deposit</td>
            <td className="table__cell">10</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">Maximum daily</td>
            <td className="table__cell">1,000</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">Maximum monthly</td>
            <td className="table__cell">5,000</td>
          </tr>
        </tbody>
    </table>
    <table className="table  table--narrow">
        <tbody className="table__body">
          <tr className="table__row  table__row--border-top">
            <th className="table__cell  table__cell--heading">Fee</th>
            <td className="table__cell">0</td>
          </tr>
          <tr className="table__row">
            <th className="table__cell  table__cell--heading">Time to wait</th>
            <td className="table__cell">1 business day</td>
          </tr>
        </tbody>
    </table>

       <br/> <br/>
    <br/> <br/>
</div>)
}

export default hot(module)(App)