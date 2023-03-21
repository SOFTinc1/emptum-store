import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-items/menu-items.component";
import "./directory.styles.scss";
import Slide from "react-reveal/Slide";

const Directory = ({ sections }) => (
  <Slide bottom>
    <div className="directory-menu">
      <div className="inner-row">
        <h1 className="categories">categories</h1>
        <h2 className="categories-title">our shop sections</h2>
      </div>
      <div className="gridView">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  </Slide>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
