import React, { CSSProperties } from 'react';
import { text } from 'stream/consumers';
  // Asegúrate de tener un archivo NeonText.css en tu proyecto

 interface NeonTextProps {
  texto:string;
  neonColor:string;
  neonSecondary:string;
  size:string;
 } 
const NeonText: React.FC<NeonTextProps> = ({texto, neonColor, neonSecondary, size}) => {
  const style : CSSProperties = {
    '--neon-color' :neonColor,
    '--neon-secondary': neonSecondary,
  } as any;
  return (
    <div className={`neon-text text-${size} py-1`} style={style}>
      {texto}
    </div>
  );
};

export default NeonText;
