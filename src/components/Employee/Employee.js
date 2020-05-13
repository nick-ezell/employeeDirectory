import React from "react";

const Employee = (props) => {
  console.log(props);
  return (
    <table className="table table-sm">
      <tbody>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Cell</th>
        </tr>
        {props.results.map((result) => (
          <tr key={result.email}>
            <th>
              <img alt={result.name.first} src={result.picture.thumbnail} />
            </th>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employee;
