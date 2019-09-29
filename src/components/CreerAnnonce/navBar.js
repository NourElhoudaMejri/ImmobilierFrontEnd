import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLinkClick = e => {
    let activeElement = document.getElementsByClassName("active")[0];
    activeElement.className = "";
    e.target.className = "active";
  };

  render() {
    return (
      <div className="col-md-12">
        <ul className="f-p-links margin_bottom">
          <li>
            <Link to="/profile" onClick={e => this.onLinkClick(e)}>
              <i className="icon-icons230" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="my_properties.html" onClick={e => this.onLinkClick(e)}>
              <i className="icon-icons215" /> Mes Propriétés
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={e => this.onLinkClick(e)}
              to="/déposer-une-annonce"
              className="active"
            >
              <i className="icon-icons215" /> Soumettre la propriété
            </Link>
          </li>
          <li>
            <Link
              href="favorite_properties.html"
              onClick={e => this.onLinkClick(e)}
            >
              <i className="icon-icons43" /> Propriétés favorites{" "}
            </Link>
          </li>
          <li>
            <Link href="login.html" onClick={e => this.onLinkClick(e)}>
              <i className="icon-lock-open3" />
              Déconnexion
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBarItem;
