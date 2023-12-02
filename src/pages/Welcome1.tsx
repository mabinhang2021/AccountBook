import React from "react";
import p1 from '../assets/images/welcome1.svg'
export const Welcome1: React.FC =()=>{
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src={p1} alt="Welcome1" />
      <h2>
        明白花钱 <br/>
        纵情享受你的爱好
      </h2>
    </div>
    )
}