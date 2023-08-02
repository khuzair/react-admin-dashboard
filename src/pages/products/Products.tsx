import './products.scss'
import { useState } from 'react';
import { DataTable } from '../../components/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import { Add } from '../../components/add/Add';
import { products } from '../../data';

export const Products = () => {
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
      field: "title",
      headerName: "Title",
      width: 230,
      type: "string",
    },
    {
      field: "color",
      headerName: "Color",
      width: 120,
      type: "string",
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      type: "string",
    },
    {
      field: "producer",
      headerName: "Producer",
      width: 150,
      type: "string",
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      type: "string",
      width: 130,
      editable: true,
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 110,
      type: "boolean",
    },
  ];

  return (
    <div className='products'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=> setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug='products' columns={columns} setOpen={setOpen} />}
    </div>
  )
}
