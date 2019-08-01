import React from 'react'

const navStyle = {
    border: '1px solid red',
    
    
}

class Nav extends React.Component{
    render() {
        return(
            <div> 
                <div className="container" style={navStyle}>
                <h1> Welcome to he navbar </h1>
                </div>
            </div>
        );
    }
}

export default Nav