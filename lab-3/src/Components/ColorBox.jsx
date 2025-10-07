//Andrew kim
//ColorBox component

export default function ColorBox({color, onClick}) {
    //ColorBox component receives a prop color, not colors array as per instructions on bb
    //i could not find a way to only pass a color prop 
    //without going into code not covered in class
    //onClick randomization logic done in container component since
    //ColorBox component only receives "colour prop" and not "colors array as prop"

    return (
        <div
            className = "ColorBox"
            style = {{backgroundColor: color}}  //set bg color to color prop
            onClick = {onClick} //receives onClick logic from container component
        ></div>
    )
}