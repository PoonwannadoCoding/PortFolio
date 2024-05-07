import '../../widget.css'
//<a> => is the hyperlink
function NavBar(){

    return(
        <div className="TopNav">

            
        <a className="Left"> WP </a>
        <div className='NavBarRightSide'>
            <a> Home</a>
            <a> About Me</a>
            <a> Project</a>
            <a> Contact</a>
        </div>
        
              
        </div>
    );

}

export default NavBar

