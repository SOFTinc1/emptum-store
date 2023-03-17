import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectCollectionsLoaded } from "../../redux/shop/shop.selectors";
import Header from "../../components/header/header.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching, isCollectionsLoaded } = this.props;
    return (
      <div style={{ background: "#fff" }}>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />}
          />
          <Route
            path=":collectionId"
            element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShopPage);

// const collectionRef = firestore.collection("collections");

// componentDidMount() {
//   const { updateCollections } = this.props;
//   const collectionRef = firestore.collection("collections");
//   collectionRef.onSnapshot(async (snapshot) => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);
//     this.setState({ loading: false });
//   }); NATIVE FIREBASE UPDATING OBSERVABLE PATTERN
// }

// fetch(
//   "https://firestore.googleapis.com/v1/projects/e-commerce-db-37aea/databases/(default)/documents/collections"
// ).then((response) => response.json()); NATIVE API CALL

// collectionRef.get().then((snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// }); OBERSVABLE PROMISE PATTERN
