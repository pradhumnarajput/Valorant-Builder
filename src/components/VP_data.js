import React from 'react';
import './vp_data.css';

export default function vp_data() {
  return (
    <div className="container">
      <span className="text">
        <p>
          <span className="heading">TOTAL :</span>
          <span className="data">   9999 VP</span>
        </p>
        <p>
          <span className="heading">Required :</span>
          <span className="data">   9999 VP</span>
        </p>
        <p>
          <span className="heading">Min. Cost :</span>
          <span className="data">   9999 INR</span>
        </p><br />
        <p>
          <span className="heading">Recommended Packs :</span>
          <p className="data">   500 VP</p>
          <p className="data">   1000 VP</p>
          <p className="data">   2050 VP</p>
        </p>
      </span>
    </div>
  )
}
