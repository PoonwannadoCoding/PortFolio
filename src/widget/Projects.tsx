import './widget.css';
import Reveal from './components/animation/RevealAnimation';

export default function Porject(){
    return(
        <div className="ProjectsContainer">
            <Reveal 
            children={
                <h1 className="TextBoxHeader"> Projects </h1>
            } />
            
        </div>
    );
}