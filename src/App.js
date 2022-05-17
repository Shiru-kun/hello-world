import { useEffect, useState } from 'react';
import './App.css';



const App = () => {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        setCounter(100);
    },[]);

    return (
        <div className='App'>
            <button onClick={()=> setCounter((previous)=>previous-1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter((previous)=>previous+1)}>+</button>

        </div>
    );
}

export default App;