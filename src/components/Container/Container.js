import React, { Component } from "react";
import Search from "../Search/Search";
import Employee from "../Employee/Employee";
import API from "../../utils/API";

class EmployeeContainer extends Component {
  state = {
    searchResult: [],
    search: "",
    results: [],
    error: "",
  };

  counter = 0;

  componentDidMount() {
    this.getEmployees();
    console.log("test");
  }

  getEmployees = () => {
    API.getPeople()
      .then((res) =>
        this.setState({
          results: res.data.results,
          searchResult: res.data.results,
          error: "",
        })
      )
      .catch((err) => this.setState({ error: err.message }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    let searchArray;
    console.log(value);

    searchArray = [...this.state.results];
    console.log(searchArray);

    const searchValue = this.searchEmployee(searchArray, value);

    this.setState({
      [name]: value,
      searchResult: searchValue,
    });
  };

  searchEmployee = (arr, value) => {
    console.log(value);
    console.log(arr);

    const directory = arr.filter((employee) => {
      return (
        employee.email.includes(value) ||
        employee.cell.includes(value) ||
        employee.name.first.includes(value) ||
        employee.name.last.includes(value)
      );
    });
    // .then((directory)=>this.setState({results: directory}))

    return directory;
  };

  render() {
    return (
      <div>
        <Search
          onChange={this.handleInputChange}
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Employee results={this.state.searchResult} />
      </div>
    );
  }
}

export default EmployeeContainer;
