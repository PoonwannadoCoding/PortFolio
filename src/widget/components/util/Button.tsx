import { MouseEventHandler } from "react";
import '../../widget.css';

interface ButtonComponent{
    name: string,
    onclick: MouseEventHandler<HTMLButtonElement>
}

function Button({name, onclick}:ButtonComponent){

    return(
        <div>
            <button className="btn" onClick={onclick}> {name} </button>
        </div>
    );

}


export default Button