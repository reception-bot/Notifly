import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import {Table} from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { format } from 'date-fns';

const columns: ColumnProps<any>[] = [
 {
   key: '1',
   title: 'Index',
   dataIndex: 'index',
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
   sortDirections: ['descend', 'ascend'],
 },
 {
   key: '2',
   title: 'First name',
   dataIndex: 'firstname',
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
   sortDirections: ['descend', 'ascend'],
 },
 {
   key: '3',
   title: 'Last name',
   dataIndex: 'lastname',
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
   sortDirections: ['descend', 'ascend'],
 },
 {
   key: '4',
   title: 'Staff',
   dataIndex: 'staff', // This column should be consistent with other variable;
   sorter: (a, b) => a.staff - b.staff,
   sortDirections: ['descend', 'ascend'],
 },
 {
   key: '5',
   title: 'Reason',
   dataIndex: 'reason', // This column should be consistent with other variable;
   sorter: (a, b) => a.reason - b.reason,
   sortDirections: ['descend', 'ascend'],
 },
 {
   key: '6',
   title: 'Date',
   dataIndex: 'date',
   sorter: (a, b) => {
     if (a.date < b.date) {
       return -1;
     }
     if (a.date > b.date) {
       return 1;
     }
     return 0;
   },
   sortDirections: ['descend', 'ascend'],
 },
];

const AdminPage: React.FunctionComponent<{}> = (props: any) => {

 let data: any[] = [];
 let stat;
 let index = 1;
   return (
     <div>
       {/* {props.tableData.map(
         console.log(props.tableData)
         data => (
           (stat = new Object()),
           (stat.index = index++),
           (stat.firstname = data.firstname),
           (stat.lastname = data.lastname),
           (stat.username = data.username),
           (stat.staff = data.staff),
           (stat.date = format(
             new Date(data.date),
             'MM/DD/YYYY hh:mm aa'
           )),
           data.push(stat),
           console.log(data)
         )
       )} */}
       {/* <NavSearch/> */}
       <Table columns={columns} dataSource={data} />
     </div>
   );

}

export default AdminPage;