import React from "react";

import p2 from '../assets/images/方便快捷.svg'


export const Welcome2: React.FC =()=>{
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
  <img src={p2} alt="Welcome2" />
  <h2>
  记录得当 <br/>
  轻松掌控财务的节奏
  </h2>
</div>
)
 }