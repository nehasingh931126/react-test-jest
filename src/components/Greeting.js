import {useState} from 'react';
import Output from './Output';
function Greeting(){
    const [changeText, setChangedText] = useState(false);
    const changeTextHandler = ()=> {
        setChangedText(true);
    }
    return <div>
        <h2>Hello World</h2>
        {!changeText && <Output><p>It's good to see you</p></Output>}

        {changeText && <Output><p>Changed</p></Output>}

        <button type="button" onClick={changeTextHandler}></button>
    </div>
}
export default Greeting;