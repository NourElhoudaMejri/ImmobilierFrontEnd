import React, { Component } from "react";
import { connect } from "react-redux";

import NavBarItem from "./navBarItem";
import MesProprietesListe from "./mesPropreitesListe";
import "./MesProprietes.css";

import { getMyAnnoncementsAction } from "../../Redux/annoncesActions";

class MesProprietes extends Component {
  componentDidMount() {
    this.props.getMyAnnoncementsAction();
  }

  render() {
    return (
      <div className="MesProprietes">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase"> Immobilier App </h1>
                <h3
                  className="text-uppercase"
                  style={{ color: "white", marginBottom: "27px" }}
                >
                  Vente, Achat Etude et Conseil dans le domaine Immobilier
                </h3>
                <p className="text-uppercase">Serving you since 1999</p>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* My - Property Start */}
        <section id="agent-2-peperty" className="my-pro padding">
          <div className="container">
            <div className="row">
              <NavBarItem />
            </div>
            <div className="row bottom30">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Mes Propriété</h2>
              </div>
            </div>
          </div>
          <div className="container  list-t-border">
            <MesProprietesListe mesProprietes={this.props.mesProprietes} />
          </div>
        </section>
        {/* My - Property end */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mesProprietes: state.mesProprietesReducer.mesProprietes
  };
};

export default connect(
  mapStateToProps,
  { getMyAnnoncementsAction }
)(MesProprietes);
