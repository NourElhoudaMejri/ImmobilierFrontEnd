import React, { Component } from "react";
import { connect } from "react-redux";

import "./achatComponent.css";
import MapContainer from "./../google-map/googleMap";

import RechercheAvancee from "../rechercheAvancee/rechercheAvancee";
import { getAnnouncementsList } from "../../Redux/annoncesActions";
import ItemList from "../itemList/itemList";
import LocationList from "../LocationComponent/locationList";
import { Pagination } from "antd";

class AchatComponent extends Component {
  componentDidMount() {
    this.props.getAnnouncementsList({ statut: "A Vendre" });
  }

  onRechercheAvanceeClick = () => {
    let searchElement = document.getElementsByClassName("search-display")[0];
    if (searchElement.id === "search-display") {
      searchElement.id = "search-desabled";
    } else searchElement.id = "search-display";

    console.log(searchElement.id);
  };

  render() {
    return (
      <div className="achat-component">
        {/*  {/*Maps*/}
        {/*<section id="banner-map">
          <div className="container-fluid">
          <h3 className="hidden">hiden</h3>
          <div className="row property-list-area property-list-map-area">
          <div className="property-list-map">/*}
          {/* <div id="property-listing-map" className="multiple-location-map" style={{width: '100%', height: '545px'}} /> */}
        {/*    <MapContainer />
              </div>
              </div>
              </div>
            </section>*/}
        {/* Map Ends */}
        {/* Search */}
        <button
          id="recherche-display"
          className="uppercase"
          onClick={this.onRechercheAvanceeClick}
        >
          Recherche Avancée
        </button>
        <section
          className="property-query-area padding_bottom search-display"
          id="search-desabled"
          style={{ marginTop: "219px", background: "#edf3f8" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">Recherche Avancée</h2>
                <p className="heading_space">
                  Nous avons des propriétés dans ces zones. Voir une liste des
                  propriétés.
                </p>
              </div>
            </div>
            <div className="row">
              <RechercheAvancee displayStatu={true} />
            </div>
          </div>
        </section>
        <div className="list-container">
          {this.props.announcementsList.length === 0 ? (
            <div className="empty-search-div">
              Nous n'avons pas trouvé des biens qui correspondent à votre
              recherche
              <div>Merci de modifier vos critères de recherche</div>
            </div>
          ) : (
            <ItemList liste={this.props.announcementsList} />
          )}
        </div>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    announcementsList: state.announcementsReducer.announcements
  };
};

export default connect(
  mapStateToProps,
  { getAnnouncementsList }
)(AchatComponent);
