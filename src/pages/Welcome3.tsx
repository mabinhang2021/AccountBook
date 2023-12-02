import React from "react";

import p3 from '../assets/images/数据可视化.svg'

export const Welcome3: React.FC =()=>{
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
  <img src={p3} alt="Welcome2" />
  <h2>
    数据可视 <br/>
    一图看尽财务全貌
  </h2>
</div>
)
 }