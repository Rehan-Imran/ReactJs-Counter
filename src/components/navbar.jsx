import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar{" "} 
                        <span className="badge bg-pill bg-primary" >
                            {this.props.sum}
                        </span>
                    </a>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;