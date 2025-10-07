//always remember to import useState if you will use states in code
import { useState } from "react";

export default function Toggle() {
    const [isHappy, setIsHappy] = useState(true);

    return (
        <div>
            <h1>{isHappy ? ":)" : "):"}</h1>
            <button onClick = {() => setIsHappy(!isHappy)}>
                {isHappy ? "Sad Face" : "Happy Face"}
            </button>
        </div>
    )
}