import {useState} from 'react'
import Button from './Button'
import ShowCounter from './ShowCounter'

function Counter(){
    const [value, setValue] = useState(0)

    const handleValue = (x) => {
        setValue(value + x);
    }
    return(
    <div className="counterDiv">
        <ShowCounter val = {value} />
        <Button title="Add" onClick = { () => handleValue(1)} />
        <Button title="Reduce" onClick = { () => handleValue(-1)} />
        <Button title="Double" onClick = { () => handleValue(value)} />
    </div>
    )
}

export default Counter
