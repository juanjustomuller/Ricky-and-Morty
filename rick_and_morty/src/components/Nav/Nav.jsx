import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom'



class Nav extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            
            <div>
            <SearchBar onSearch={this.props.onSearch}/>
            
            <Link to="/about">
            <button>About</button>
            </Link>
            <Link to="/home">
            <button>Home</button>
            </Link>
            <Link to="/favorites">
            <button>Favorites</button> 
            </Link>
            
            </div>
            
        )
    }
}

export default Nav;