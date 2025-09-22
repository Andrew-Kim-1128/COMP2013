export default function Card(props){
    console.log(props);
    return <div className={props.sale ? "Card-Component card-sale-glow" : "Card-Component"}>
        <img src={props.image} alt ="" width = "100px"></img>
        <h2>{props.name}</h2>
        {props.sale ? <h3 className = "card-sale">Sale</h3> : <h3>&nbsp;</h3>}
        <p>{props.price}</p>
        <button>Buy Now</button>
    </div>
}

//prop.sale && "message"    //if true, msg happens
//prop.sale || "message"    //if false, msg happens