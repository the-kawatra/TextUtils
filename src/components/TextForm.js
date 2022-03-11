import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to Uppercase", "Success");
    }
    
    const handleLoClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to Lowercase", "Success");
    }
    
    const handleCapitalizedClick = () => {
        let arrText = text.toLowerCase().split(" ");
        let newArr = [];
        arrText.forEach(arr => {
            newArr.push(arr.charAt(0).toUpperCase() + arr.slice(1))
        });
        let newText = newArr.join(' ');
        setText(newText);
        props.showAlert("Text has been converted to Capitalcase", "Success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "Success");
    }
    
    const handleCopy = () => {
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "Success");
    }
    
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "Success");
    }

    const handleOnChange = (e) => {
        // console.log("On change");
        setText(e.target.value);
    }

    const [text, setText] = useState("");
//   text = "new text"; // Wrong way to change the state
//   setText("new text"); // Correct way to change the state
  return (
      <>
        <div className='container'>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{        color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#999999':'white'}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalizedClick}>Convert to Capitalized Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>    
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
      </>
  )
}
