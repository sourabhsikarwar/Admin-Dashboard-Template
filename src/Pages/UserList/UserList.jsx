import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ulUser">
            <img src={params.row.avatar} alt="" className="ulImg" width="30" />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="ulEdit">Edit</button>
            </Link>
            <DeleteOutline className="ulDelete" onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
