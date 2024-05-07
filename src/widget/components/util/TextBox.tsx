import '../../widget.css';
import Reveal from '../animation/RevealAnimation';
interface TextBoxComponent{
    Header: string,
    Body: string
}

function TextBox( {Header, Body}:TextBoxComponent ){
    return(
        <div className="TextBox">
            
            <h1 className="TextBoxHeader">
                {Header}
            </h1>
            <Reveal children={
                <p className="TextBoxBody">
                {Body}
            </p>
            } />
            
        </div>
    );
    

}

export default TextBox