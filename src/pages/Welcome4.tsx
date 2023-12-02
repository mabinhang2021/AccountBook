import React from "react";
import p4 from '../assets/images/云数据,分类.svg'

export const Welcome4: React.FC =()=>{
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
  <img src={p4} alt="Welcome2" />
  <h2>
    云端记录 <br/>
    体验财务节奏智能化
  </h2>
</div>
)
 }