import '../../widget.css'
//<a> => is the hyperlink
function NavBar(){

    return(
        <div className="TopNav">

            
        <a className="Left"> WP </a>
        <div className='NavBarRightSide'>
            <a className='NavText'> Home</a>
            <a className='NavText'> Skill-Set</a>
            <a className='NavText'> Project</a>
            <a className='NavText'> Contact</a>
        </div>
        
              
        </div>
    );

}

export default NavBar

