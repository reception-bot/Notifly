import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function AdminPage(props: any) {
  let rowsData:any = [];
  for(let i = 0; i < props.tableData.length; i++){
    rowsData.push(
    <tr>
      <th>
        {props.tableData[i].firstname}
      </th>
      <th>
        {props.tableData[i].lastname}
      </th>
      <th>
        {props.tableData[i].username}
      </th>
      <th>
        {props.tableData[i].reason}
      </th>
      <th>
        {props.tableData[i].date}
      </th>
    </tr>)
  }
  return (
  <div>
    <Link to="/">
      <Button buttonName="Back" />
    </Link>
    Check-in Log
    <table>
      <tbody>
        <tr>
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
  );
}

export default AdminPage;
