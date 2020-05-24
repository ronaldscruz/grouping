import React from "react";
import "./styles.css";

import { Search } from "@material-ui/icons";

function SearchField() {
  return (
    <div className="search-field-wrapper">
      <Search />
      <input name="search_field" className="search-field" />
    </div>
  );
}

export default SearchField;
