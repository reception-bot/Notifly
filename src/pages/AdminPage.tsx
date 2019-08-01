import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function AdminPage(props: any) {
  let rowsData: any = [];
  for (let i = 0; i < props.tableData.length; i++) {
    rowsData.push(
      <tr className="content">
        <td>{props.tableData[i].firstname}</td>
        <td>{props.tableData[i].lastname}</td>
        <td>{props.tableData[i].username}</td>
        <td>{props.tableData[i].reason}</td>
        <td>{props.tableData[i].date}</td>
      </tr>
    );
  }
  return (
    <div>
      <div className="back-button">
        <Link to="/">
          <input className="submit-back" type="submit" value="< Back" />
        </Link>
      </div>
      <p className="h-admin">Check-in Log</p>
      <div className="table">
        <table>
          <tbody>
            <tr className="tr-header">
              <th>Visitor's Firstname</th>
              <th>Visitor's Lastname</th>
              <th>CodeSmith Collaborator</th>
              <th>Reason for visit</th>
              <th>Date</th>
            </tr>
            {rowsData}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
