import { useState } from 'react';
import './CookieClicker.css'

export function CookieCliker() {
    const initialCountValue = 0;
    const [count, setCount] = useState(initialCountValue);

    // function handleMinusClick() {
    //     setCount(count => count - 1)
    // }


    // function handleClick() {
    //     setCount(count => count + 1)
    // }

        // function handleResetClick() {
    //     setCount(() => initialCountValue)
    // }

    return (
        <div>
            <h1 className="display-1 cookieClicker">Cookie CLICKER</h1>
            <div className="cookieClicker">
                <button onClick={() => setCount((count) => count - 1)} className="btn">-</button>
                <p className="count">{count}</p>
                <button onClick={() => setCount((count) => count + 1)} className="btn">+</button>
                <button onClick={() => setCount((initialCountValue))} className="btn">Reset</button>
            </div>
        </div>
    );
}

// <button onClick={() => setCount((count) => count + 1)}>
//   skaicius yra: {count}
// </button>
// </button>