import * as React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Navigation from "../components/Navigation";

function AdminPage(props: any) {
  let rowsData: any = [];
  for (let i = 0; i < props.tableData.length; i++) {
    rowsData.push(
      <tr className="content" key={props.tableData[i].firstname + props.tableData[i].date}>
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
      <h4 className="primary">Check-in Log</h4>
      <div className="table">
        <table>
          <tbody>
            <tr className="tr-header">
              <th>First</th>
              <th>Last</th>
              <th>Staff</th>
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
