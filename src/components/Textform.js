import React, { useState } from 'react'


export default function Textform(props) {

    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        
    }

    const handlelowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        
    }

    const handleclearclick = () => {
        setText(" ")
        
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'dimgrey':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear the text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview here"}</p>
            </div>
        </>
    )
}
