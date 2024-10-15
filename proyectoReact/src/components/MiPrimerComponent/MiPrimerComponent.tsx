import { FC } from "react";

interface IPropsMiComponent{
    text:String;
    color:String;
    fontSize?:number;
}

export const MiPrimerComponent : FC<IPropsMiComponent> = ({text, color, fontSize}) => {
  return <div style={{color: `${color}`, fontSize: `${fontSize || 1}rem`}}>
    <p>{text}</p>
    
    </div>
  
}
