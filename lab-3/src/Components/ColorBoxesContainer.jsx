import ColorBox from "./ColorBox";
import { useState } from "react";

//Andrew Kim
//Container component

export default function ColorBoxesContainer({ colors }) {
    const [boxColors, setBoxColor] = useState(colors)
    //set boxColors to useState of colors array to copy its values and set as react state

    return (
        <div className = "ColorBoxesContainer">
            {boxColors.map((color, index) => (  //map the copied array to Colorboxes
                <ColorBox
                key = {index}
                color = {color}
                onClick = {() => {  //onClick handler for ColorBox component
                    const randColors = [...boxColors];  //duplicates current react state 
                    //generate a new random color for the clicked ColorBox @ index
                    randColors[index] = colors[Math.floor(Math.random() * colors.length)]
                    setBoxColor(randColors) //updates the react state with the modified state
                }}
                />
            ))}
        </div>
    )
}