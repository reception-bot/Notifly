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

// import * as React from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/Button";



// import styled from "styled-components";


// const columns: ColumnProps<data>[] = [
//   {
//     key: "1",
//     title: "Index",
//     dataIndex: "index",
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     sorter: (a, b) => {
//       if (a.index < b.index) {
//         return -1;
//       }
//       if (a.index > b.index) {
//         return 1;
//       }
//       return 0;
//     },
//     sortDirections: ["descend", "ascend"]
//   },
//   {
//     key: "2",
//     title: "Firstname",
//     dataIndex: "firstname",
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     sorter: (a, b) => {
//       if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) {
//         return -1;
//       }
//       if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) {
//         return 1;
//       }
//       return 0;
//     },
//     sortDirections: ["descend", "ascend"]
//   },
//   {
//     key: "3",
//     title: "Lastname",
//     dataIndex: "lastname",
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     sorter: (a, b) => {
//       if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) {
//         return -1;
//       }
//       if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) {
//         return 1;
//       }
//       return 0;
//     },
//     sortDirections: ["descend", "ascend"]
//   },
//   {
//     key: "4",
//     title: "Username",
//     dataIndex: "username", // This column should be consistent with other variable;
//     sorter: (a, b) => a.username - b.username,
//     sortDirections: ["descend", "ascend"]
//   },
//   {
//     key: "5",
//     title: "Reason",
//     dataIndex: "reason", // This column should be consistent with other variable;
//     sorter: (a, b) => a.reason - b.reason,
//     sortDirections: ["descend", "ascend"]
//   },
//   {
//     key: "6",
//     title: "Date",
//     dataIndex: "date",
//     sorter: (a, b) => {
//       if (a.date < b.date) {
//         return -1;
//       }
//       if (a.date > b.date) {
//         return 1;
//       }
//       return 0;
//     },
//     sortDirections: ["descend", "ascend"]
//   }
// ];

// function AdminPage(props: any) {
//   let table: data[] = [];
//   let stat;
//   let index = 1;
//   // console.log("✅", props.tableData);
//   return (
//     <AllFunctionsContainerStyled>
//       {/* {console.log(props.tableData[0])} */}
//         {props.tableData.forEach(
//           data => (
//             console.log(data.firstname),
//             (stat = new Object()),
//             (stat.index = index++),
//             (stat.firstname = data.firstname),
//             (stat.lastname = data.lastname),
//             (stat.staff = data.username),
//             (stat.staff = data.staff),
//             (stat.date = format(new Date(data.date), "MM/DD/YYYY hh:mm aa")),
//             table.push(stat),
//             console.log(table)
//           )
//         )}
//       {/* <NavSearch/> */}
//       <Table columns={columns} dataSource={table} />
//     </AllFunctionsContainerStyled>
//   );
// }

// const AllFunctionsContainerStyled = styled.div`
//   padding: 1em;
//   height: 100vh;
//   overflow: scroll;
// `;

// export default AdminPage;
