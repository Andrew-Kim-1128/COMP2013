//This is the WRONG way to store, manipulate, and re-render components
export default function BadCounter() {
    let count = 0
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> {
                count++;
                console.log(count);
            }}>Add to Counter</button>
        </div>
    )
}