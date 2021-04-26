import React from 'react';
import { TableHeader, TableHeaderText } from './TableTemplate.style';

const TableTemplate = (props) => {
  const { children } = props;
  return (
    <TableHeader>
      {children.map((header, index) => (
        <TableHeaderText key={`${header.title}-${index}`} column={header.column}>
          {header.title}
        </TableHeaderText>
      ))}
    </TableHeader>
  );
};

export default TableTemplate;
