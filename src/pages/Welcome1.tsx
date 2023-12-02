import React from "react";
import p1 from '../assets/images/welcome1.svg'
export const Welcome1: React.FC =()=>{
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src={p1} alt="Welcome1" />
      <h2>
      花钱有方 <br/>
      纵情享受生活的乐趣
      </h2>
    </div>
    )
}