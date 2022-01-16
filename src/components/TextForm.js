// import React from 'react'
import React, { useState } from 'react'



export default function TextForm(props) {
    
    const changeUppercase= () =>{
    
        let newText = Text.toUpperCase()
        setText(newText)
    }

    const changeLowercase= () =>{
    
        let newText = Text.toLowerCase()
        setText(newText)
    }

    const textOnChange = (e)=>{
        // console.log('On change');
        setText(e.target.value)
    }

    const [Text, setText] = useState('')

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' placeholder='Enter Your text' value={Text} id='mybox'onChange={textOnChange} rows={8}>                   
                </textarea>
                <br/>            
                    <button className='btn btn-primary mx-1' onClick={()=>changeUppercase()}>Convert Text to Upper Case</button>
                    <button className='btn btn-success mx-1' onClick={()=>changeLowercase()}>Convert Text to Lower Case</button>

            </div>
        </div>
        <div className='conatainer my-3'>
            <h2>Your Text Sumary</h2>
            <p>{Text.split(" ").length} words and {Text.length} charactors</p>
            <p>{0.008 * Text.split(" ").length} Timer to read this paragraph</p>
            <h2>Preveiw text</h2>
            <p>{Text}</p>
        </div>
        </>
    )
}
