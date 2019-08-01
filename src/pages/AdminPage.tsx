import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { format } from "date-fns";

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
        {format(new Date(props.tableData[i].date), "MM/DD/YYYY hh:mm aa")}
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
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Fellow</th>
          <th>Reason</th>
          <th>Date</th>
        </tr>
        {rowsData}
      </tbody>
    </table>
  </div>
  );
}

export default AdminPage;
