import React, { useState } from "react";
function TextForm(props) {
    const [text, settext] = useState();
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const handleClearClick = () => {
        let newtext = "";
        settext(newtext);
    }
    const handleCopyClick = () => {
        var copyText = document.getElementById("textarea");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }
    const handleListenClick=()=>{
        
        let msg = new SpeechSynthesisUtterance();
        msg.text = document.getElementById("textarea").value;
        window.speechSynthesis.speak(msg);
    }
    const handle = (e) => {
        settext(e.target.value)
    }
    return (
        <>

            <div className="m-auto mt-4 container">
               <h1 className={`text-${props.mode==="dark"?"light":"dark"}`}>Enter your text here </h1>
                <textarea className={`form-control bg-${props.mode==="dark"?"secondary":"light"} text-${props.mode==="dark"?"light":"dark"}`} id="textarea" value={text} onChange={handle} rows="7" >

                </textarea>
                <div className="d-flex flex-wrap">
                <button className=" m-3 btn btn-primary text-md " onClick={handleUpClick}>To UpperCase</button>
                <button className="m-3 btn btn-primary text-md " onClick={handleCopyClick}> To Copy Text</button>
                <button className="m-3 btn btn-primary text-md " onClick={handleLoClick}> To LowerCase</button>
                <button className="m-3 btn btn-primary text-md " onClick={handleClearClick}>To Clear Text</button>
                <button className="m-3 btn btn-primary text-md " onClick={handleListenClick}>To Listen Text</button>
                </div>
                
            </div>
            <div className="container m-4 ">

            </div>
        </>
    );

}
export default TextForm