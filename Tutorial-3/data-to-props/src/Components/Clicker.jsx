const ClickMsg = () => {
    console.log("This is a clicker function!");
}

export default function Clicker(){
    /*no () when calling helper function*/
    //to make external function work properly in e handler, remove (), keep 
    //function name
    return <button onClick={ClickMsg}>Click Me</button>;
}