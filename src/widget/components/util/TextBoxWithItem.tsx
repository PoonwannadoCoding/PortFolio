import Grid from '@mui/material/Grid';
import '../../widget.css';
interface TextBoxComponent{
    Header1: string,
    Body1: string[]
    Header2: string,
    Body2: string[]
}

function TextBoxWithItem( {Header1, Body1, Header2, Body2}:TextBoxComponent ){
    return(
        <div className="TextBoxBlackBG" style={{alignItems:"center"}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1 className="TextBoxHeader" style={{fontSize:"1.5vw"}}>
                        {Header1}
                    </h1>
                    <ul>
                        {Body1.map((item, index) => (
                        
                            <li key={index} className="TextBoxBody">
                                {item}
                            </li>

                        

                        ))}
                    </ul>

                </Grid>
                <Grid item xs={2}>
                    <h1 className="TextBoxHeader" style={{fontSize:"1.5vw"}}>
                        {Header2}
                    </h1>
                    <ul>
                        {Body2.map((item, index) => (
                        
                            <li key={index} className="TextBoxBody">
                                {item}
                            </li>

                        

                        ))}
                    </ul>

                </Grid>
            </Grid>
            
            
            
            
        </div>
    );
    

}

export default TextBoxWithItem