export default function ColorBox({ colors }) {

    return (
        //try setting these contents into its own component ColorBox, and then 
        //call the component from inside ColorBoxContainer component to display
        <div className = "ColorBoxContainer">
            {colors.map((color, index)=> {
                const randIndex = Math.floor(Math.random() * colors.length);
                const randColor = colors[randIndex];
                (
                <div className="ColorBox" 
                key = {index}
                style = {{backgroundColor: randColor}}></div>
            )})}
        </div>
    )
}

/* <div className = "ColorBoxContainer">
            {colors.map((color, index)=> (
                <div className="ColorBox" 
                key = {index}
                style = {{backgroundColor: color}}></div>
            ))}
        </div> */