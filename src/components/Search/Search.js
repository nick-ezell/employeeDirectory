import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form>
      <div className="form-group row">
        <div className="col-xs-3">
          <label htmlFor="search"></label>
          <input
            onChange={props.onChange}
            onClick={props.handleFormSubmit}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
