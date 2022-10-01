import React from 'react';
import { Table, TableBody } from '@mui/material';
import Row from './Row';
import DataGridRow from './DataGridRow';

const TableWrapper = ({ rows }) => {
  const MappedRows = rows && rows.length > 0 ? rows
    .filter(row => !!row && row)
    .map(row => 
      !!row.transactions? <DataGridRow key={row.leftTitle} {...row}/>
      : <Row key={row.leftTitle} {...row}/>
    ) : null;

  return <Table sx={{ width: '100%' }}>
    {/* <colgroup>
      <col style={{ width: '40px' }} />
      <col style={{ width: '250px' }} />
    </colgroup> */}
    <TableBody>
      {MappedRows}
    </TableBody>
  </Table>;
};

export default TableWrapper;