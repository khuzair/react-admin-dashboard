import './users.scss'
import { useState } from 'react';
import { GridColDef } from "@mui/x-data-grid"
import { DataTable } from '../../components/dataTable/DataTable'
import { userRows } from '../../data';
import { Add } from '../../components/add/Add';

export const Users = () => {
  const [open, setOpen] = useState(false)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { 
      field: "img", headerName: "Avtar", width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      type: "string",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      type: "string",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      type: "string",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
      type: "string",
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
  ];

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug='users' columns={columns} setOpen={setOpen} />}
    </div>
  )
}
