import React from "react";
import { Table } from "react-bootstrap";
import ToggleTable from "../shared/ToggleTable";

const RepositoriesListTable = ({ handleShowMore, toggleStatus, list }) => (
  <div className="container">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stars</th>
          <th>Forks</th>
        </tr>
      </thead>
      <tbody>
        {list.map((repo, index) => (
          <tr key={index}>
            <td>{repo["name"]}</td>
            <td>{repo["stars"]}</td>
            <td>{repo["forks"]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <button onClick={handleShowMore}>{toggleStatus}</button>
  </div>
);

export default ToggleTable(RepositoriesListTable);
