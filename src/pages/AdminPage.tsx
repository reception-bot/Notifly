import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function AdminPage(props: any) {
  let rowsData:any = [];
  for(let i = 0; i < props.adminData.length; i++){
    rowsData.push(
    <tr>
      <th>
        {props.adminData.firstname}
      </th>
      <th>
        {props.adminData.lastname}
      </th>
      <th>
        {props.adminData.username}
      </th>
      <th>
        {props.adminData.reason}
      </th>
      <th>
        {props.adminData.data}
      </th>
    </tr>)
  }
  return (
  <div>
  {console.log('here girl', props.tableData)}
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
