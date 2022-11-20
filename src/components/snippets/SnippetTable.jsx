import './snippetTable.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSnippet } from '../../reduxToolkit/actions/snippet/snippet';
import { setSnippetViewModal } from '../../reduxToolkit/slices/modalSlice';
import SnippetViewModal from './SnippetViewModal';

export default function SnippetTable() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let snippets = useSelector((state) => state?.snippetSlice?.snippets);
  snippets = snippets?.map(({ _id: id, ...rest }) => ({ id, ...rest }));

  const handleDelete = (id) => {
    dispatch(deleteSnippet(id, setLoading));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
    },
    {
      field: 'code',
      headerName: 'Description',
      width: 400,
      renderCell: (params) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: params.row.code }}></div>
        );
      },
    },
    {
      field: 'tag',
      headerName: 'Tag',
      width: 120,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() => {
                dispatch(setSnippetViewModal(true));
              }}
              className='userListEdit'
            >
              View
            </button>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
            <SnippetViewModal snippet={params.row} />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList mt-3'>
      <DataGrid
        autoHeight
        density='comfortable'
        rows={snippets}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        loading={loading}
      />
    </div>
  );
}
