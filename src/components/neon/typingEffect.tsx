import React from "react"

// EN PRUEBA

interface TypingProps{
    texto: string;
    style:string;
}
const TypingEffect: React.FC<TypingProps> = ({texto, style}) => {
    return (
        <span className={`typingeffect ${style}`}>
            {texto}
        </span>
    )
}
export default TypingEffect