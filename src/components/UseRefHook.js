import React, { useRef, useEffect, useState } from 'react';

function UseRefHook(){
    const [name, setName] = useState('')
    const prevName = useRef('') 

     //useRef demo 1
     const inputRef = useRef(null)


     useEffect(()=>{
        //Use case 1: imperatively access DOM nodes by storing its reference
        inputRef.current.focus();
    },[])

        //useRef demo 2: storing the previous of a state
        useEffect(() => {
            prevName.current = name
        },[name])

    return(
        
        <div>
            <h1>useRef demo 1</h1>
            {/* use case 1  */}
            <input type="text" placeholder=""/>
            <input ref={inputRef} type="text" placeholder=""/>
            {/* use case 1  */}

            <h1>useRef demo 2</h1>

            {/* use case 2 */}
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <p>Previous Name: {prevName.current}</p>
            <p>Current: {name}</p>
     
            {/* use case 2 */}
        </div>
    )
}

export default UseRefHook;