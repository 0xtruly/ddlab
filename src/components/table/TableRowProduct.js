import React from 'react';
import { capitalize } from '../../helpers/helper';
import TableItem from './TableItem';
import { Row } from './TableTemplate.style';

const TableRowProduct = (props) => {
  const { children } = props;
  const { name, variant, stock, price, status } = children;
  return (
    <Row>
      <TableItem type="text" bold column={5}>
        {name}
      </TableItem>
      <TableItem type="text" column={5}>
        {variant}
      </TableItem>
      <TableItem type="text" column={5}>
        {stock} Items
      </TableItem>
      <TableItem type="text" column={5}>
        ${price}
      </TableItem>
      <TableItem type="status" column={5} status={capitalize(status)} />
    </Row>
  );
};
export default TableRowProduct;
