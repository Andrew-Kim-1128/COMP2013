//This is an event onClick function aka handler
const msgOnClick = (msg) => console.log(msg);

export default function ClickerWithProps({message, btnText}){
    return ( //if a handler has a parameter and needs an argument to work,
        //we must use a lambda function inside the event
        <button onClick={() => msgOnClick(message)}>{btnText}</button>
    )
}