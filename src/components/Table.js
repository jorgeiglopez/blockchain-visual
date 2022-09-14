import React from 'react';
import { Table, TableBody } from '@mui/material';
import Row from './Row';

const TableWrapper = ({ rows }) => {
  const MappedRows = rows && rows.length > 0 ? rows.map(row => <Row key={row.leftTitle} {...row}/>) : null;

  return <Table>
    <colgroup>
      <col style={{ width: '15%' }} />
      <col style={{ width: '85%' }} />
    </colgroup>
    <TableBody>
      {MappedRows}
    </TableBody>
  </Table>;
};

export default TableWrapper;