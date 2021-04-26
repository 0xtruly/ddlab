import React, { Fragment } from 'react';
import TableTemplate from './TableTemplate';

const Table = (props) => {
  const { children } = props;
  const tableHeader = [
    {
      title: 'Product Name',
      column: 5,
    },
    {
      title: 'Variant',
      column: 5,
    },
    {
      title: 'Stock',
      column: 5,
    },
    {
      title: 'Price',
      column: 5,
    },
    {
      title: 'Status',
      column: 5,
    },
  ];

  return (
    <Fragment>
      <TableTemplate>{tableHeader}</TableTemplate>
      {children}
    </Fragment>
  );
};
export default Table;
