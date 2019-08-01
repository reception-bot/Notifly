import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Table } from "antd";
import { ColumnProps } from "antd/lib/table";
import { format } from "date-fns";
import styled from "styled-components";

const columns: ColumnProps<any>[] = [
  {
    key: "1",
    title: "Index",
    dataIndex: "index",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => {
      if (a.index < b.index) {
        return -1;
      }
      if (a.index > b.index) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "2",
    title: "First name",
    dataIndex: "firstname",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => {
      if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) {
        return -1;
      }
      if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "3",
    title: "Last name",
    dataIndex: "lastname",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => {
      if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) {
        return -1;
      }
      if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "4",
    title: "Staff",
    dataIndex: "username", // This column should be consistent with other variable;
    sorter: (a, b) => a.username - b.username,
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "5",
    title: "Reason",
    dataIndex: "reason", // This column should be consistent with other variable;
    sorter: (a, b) => a.reason - b.reason,
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "6",
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend", "ascend"]
  }
];

function AdminPage(props: any) {
  let table: any[] = [];
  let stat = {
    index: 0,
    firstname: "",
    lastname: "",
    staff: "",
    date: ""
  };
  let index = 1;
  {props.tableData.map(
    (data: {
      firstname: string;
      lastname: string;
      username: string;
      staff: string;
      date: string | number | Date;
    }) => (
      // console.log(data.firstname),
      (stat.index = index++),
      (stat.firstname = data.firstname),
      (stat.lastname = data.lastname),
      (stat.staff = data.username),
      (stat.staff = data.staff),
      (stat.date = format(new Date(data.date), "MM/DD/YYYY hh:mm aa")),
      table.push(stat),
      console.log(data)
    )
  )}
  // console.log("✅", props.tableData);
  return (
    <AllFunctionsContainerStyled>
      {/* {console.log(props.tableData[0])} */}
      {/* <NavSearch/> */}
      <Table columns={columns} dataSource={table} />
    </AllFunctionsContainerStyled>
  );
}

const AllFunctionsContainerStyled = styled.div`
  padding: 1em;
  height: 100vh;
  overflow: scroll;
`;

export default AdminPage;
