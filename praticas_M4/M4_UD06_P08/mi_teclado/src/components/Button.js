import { React, useState } from 'react'
import {Result} from './Result';
import "./Button.css"


export const Button = () => {
    let [enterValue, setEnterValue] = useState("");
    
    let charToAppend = '';
    const mapaBtn = {
        q: "q",
        w: "w",
        e: "e",
        r: "r",
        t: "t",
        y: "y",
        u: "u",
        i: "i",
        o: "o",
        p: "p",
        a: "a",
        s: "s",
        d: "d",
        f: "f",
        g: "g",
        h: "h",
        j: "j",
        k: "k",
        l: "l",
        ñ: "ñ",
        z: "z",
        x: "x",
        c: "c",
        v: "v",
        b: "b",
        n: "n",
        m: "m"
    };
    

    function handleButtonClick(value) {
        if (value === "retroceso") {
            setEnterValue( (prevValue) => prevValue.slice(0,-1));
        } else if (value === "espacio") {
            setEnterValue( (prevValue) => prevValue + ' ');
        } else {
            const indice = mapaBtn[value];
            charToAppend = indice;
            setEnterValue( (prevValue) => prevValue + charToAppend);
        }
    }

    return (
        <>
            <Result value={enterValue} />
            <div className='teclado'>
                <button onClick={()=> handleButtonClick("q")}>q</button>
                <button onClick={()=> handleButtonClick("w")}>w</button>
                <button onClick={()=> handleButtonClick("e")}>e</button>
                <button onClick={()=> handleButtonClick("r")}>r</button>
                <button onClick={()=> handleButtonClick("t")}>t</button>
                <button onClick={()=> handleButtonClick("y")}>y</button>
                <button onClick={()=> handleButtonClick("u")}>u</button>
                <button onClick={()=> handleButtonClick("i")}>i</button>
                <button onClick={()=> handleButtonClick("o")}>o</button>
                <button onClick={()=> handleButtonClick("p")}>p</button>
            </div>

            <div className='teclado'>
                <button onClick={()=> handleButtonClick("a")}>a</button>
                <button onClick={()=> handleButtonClick("s")}>s</button>
                <button onClick={()=> handleButtonClick("d")}>d</button>
                <button onClick={()=> handleButtonClick("f")}>f</button>
                <button onClick={()=> handleButtonClick("g")}>g</button>
                <button onClick={()=> handleButtonClick("h")}>h</button>
                <button onClick={()=> handleButtonClick("j")}>j</button>
                <button onClick={()=> handleButtonClick("k")}>k</button>
                <button onClick={() => handleButtonClick("l")}>l</button>
                <button onClick={()=> handleButtonClick("ñ")}>ñ</button>
            </div>

            <div className='teclado'>
                <button onClick={()=> handleButtonClick("z")}>z</button>
                <button onClick={()=> handleButtonClick("x")}>x</button>
                <button onClick={()=> handleButtonClick("c")}>c</button>
                <button onClick={()=> handleButtonClick("v")}>v</button>
                <button onClick={()=> handleButtonClick("b")}>b</button>
                <button onClick={()=> handleButtonClick("n")}>n</button>
                <button onClick={() => handleButtonClick("m")}>m</button>
                <button className="espacio" onClick={()=> handleButtonClick("espacio")}></button>
                <button className="retroceso" onClick={() => handleButtonClick("retroceso")}>{"<=="}</button>
            </div>
        </>
    )
}


