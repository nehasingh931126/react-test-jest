import {useState} from 'react';

function Greeting(){
    const [changeText, setChangedText] = useState(false);
    const changeTextHandler = ()=> {
        setChangedText(true);
    }
    return <div>
        <h2>Hello World</h2>
        {!changeText && <p>It's good to see you!</p>}
        {changeText && <p>Changed</p>}
        <button type="button" onClick={changeTextHandler}></button>
    </div>
}
export default Greeting;