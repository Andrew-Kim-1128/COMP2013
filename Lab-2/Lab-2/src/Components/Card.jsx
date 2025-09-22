export default function Card(props){
    console.log(props);
    return (
        <div className="card-component">
            <img src={props.image} alt="" width="150px"/>
            <h2>{props.location}</h2>
            <h3>{props.name}</h3>
            {props.rating >= 4 ? 
            <p style = {{color: "green"}}>{props.rating + " ★"}</p> : 
            <p style = {{color: "red"}}>{props.rating + " ★"}</p>}
            <h4>{props.price}</h4>
        </div>
    )
}