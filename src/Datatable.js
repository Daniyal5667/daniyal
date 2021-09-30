import React, { useState } from "react";

import MaterialTable from "material-table";
//import MaterialTable from "material-table";
//import GetAppIcon from "@mui/icons-material/GetApp";
//import Hook from "./Hooks";
import  "./app";
//import Welcome from './Props'

function Datatable() {
  const [tableData, setTableData] = useState([
    {
      name: "ahmed",
    
      email: "ahmed@gmail.com",
      phone: 987654,
      age: 24,
      gender: "M",
      city: "Lahore",
    },
    {
      name: "awais",
      email: "awais@gmail.com",
      phone: 935653,
      age: 20,
      gender: "M",
      city: "Islamabad",
    },
    {
      name: "bisma",
      email: "bisma@gmail.com",
      phone: 967654,
      age: 19,
      gender: "F",
      city: "Karachi",
    },
    {
      name: "anwar",
      email: "anwar@gmail.com",
      phone: 988657,
      age: 26,
      gender: "M",
      city: "Multan",
    },
  ]);
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "phone", align: "center" },
    { title: "Age", field: "age" },
    { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
    { title: "City", field: "city" },
  ];
  return (
    <>
      
      <h1 style={{ textAlign: "center" }}>React-Datatable</h1>
      <h3 style={{ textAlign: "center" }}>Data-Table</h3>
      
      <MaterialTable
        columns={columns}
        data={tableData}
        title="Students-Information"
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
             
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={
          [
            // {
            //   icon: () => <GetDatatableIcon />,
            //   tooltip: "click me",
            //   onClick: (e, data) => console.log(data),
            //   isFreeAction: true,
            // },
          ]
        }
        options={{
          exportButton: true,
          exportAllData: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          grouping: true,
          columnsButton: true,
         
          headerStyle: { background: "#402b03", color: "white"  },
          
          
          
        }}
      />
    </>
  );
}
export default Datatable;