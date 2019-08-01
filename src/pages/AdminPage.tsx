import * as React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Navigation from "../components/Navigation";

function AdminPage(props: any) {
  let rowsData: any = [];
  for (let i = 0; i < props.tableData.length; i++) {
    rowsData.push(
      <tr className="content">
        <td>{props.tableData[i].firstname}</td>
        <td>{props.tableData[i].lastname}</td>
        <td>{props.tableData[i].username}</td>
        <td>{props.tableData[i].reason}</td>
        <td>{format(new Date(props.tableData[i].date), "MM/DD/YYYY hh:mm aa")}</td>
      </tr>
    );
  }
  return (
    <div>
      <Navigation />
      <p className="h-admin">Check-in Log</p>
      <div className="table">
        <table>
          <tbody>
            <tr className="tr-header">
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
    </div>
  );
}

export default AdminPage;
