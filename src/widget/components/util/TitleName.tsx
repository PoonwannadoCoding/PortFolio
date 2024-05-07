import '../../widget.css'
import RevealAnimation from '../animation/RevealAnimation';

interface TitleName{
    HeaderText: string,
    SubHeaderText: string,
    Text:string
}

function TitleName({HeaderText, SubHeaderText, Text}: TitleName){

    return(
        <div className="TitleDec">
                <h1 className="HomeHeader">
                    {HeaderText}
                </h1>
                
                    <h2 className="HomeSubHeader">
                    {SubHeaderText}
                </h2>
                
                <RevealAnimation children={
                <p className="HomeText">
                    {Text}
                </p>

                } />
                
                
           </div>
    );

            
}


export default TitleName