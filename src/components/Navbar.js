import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";

class Navbar extends Component{

    // hamburger function
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                {/* <img src="img/img.png" alt="navbar-logo-img"/> */}
                <h1 className="navbar-logo">Logo</h1>

                {/* hamburger */}
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                {/* navbar */}
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}>
                                </i>{item.title}
                            </Link>
                        </li>
                    );
                })}

                <button><i class="fa-solid fa-magnifying-glass search"></i></button>
                <button><i class="fa-solid fa-user-plus signup"></i></button>

                </ul>
            </nav>
        );
    }
}

export default Navbar;