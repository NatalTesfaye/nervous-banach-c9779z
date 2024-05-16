import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import menu from "./Assets/menu.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assets/logo.jpg";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" alt="img" src={ logo } />

        <div className="menu-icons" onClick={this.handleclick}>
          <img className="img" src={menu} alt="" />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
