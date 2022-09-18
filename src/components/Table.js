import React from 'react';
import { Table, TableBody } from '@mui/material';
import Row from './Row';

const TableWrapper = ({ rows }) => {
  const MappedRows = rows && rows.length > 0 ? rows
    .filter(row => !!row)
    .map(row => <Row key={row.leftTitle} {...row}/>) : null;

  return <Table>
    <colgroup>
      <col style={{ width: '10%' }} />
      <col style={{ width: '90%' }} />
    </colgroup>
    <TableBody>
      {MappedRows}
    </TableBody>
  </Table>;
};

export default TableWrapper;