import '../../widget.css'

interface CardDetail{
    ProjectName:string,
    Description:string,
    URL:string

}

export default function Card({ProjectName, Description, URL}:CardDetail){
    return(
        <div className='CardContainer'>
            <h3 className='CardHeader'>
               Project: {ProjectName}
            </h3>
            <p className='CardText'>
               Detail: {Description}
            </p>
            <p>
                <a className='CardText' href={URL}>
                    {URL}
                </a>
            </p>
            
        </div>
        
        
    );


}