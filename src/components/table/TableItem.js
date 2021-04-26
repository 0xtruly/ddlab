import React, { Fragment } from 'react';
import { Text, StatusContainer, StatusBlock } from './TableTemplate.style';

const TableItem = (props) => {
  const { children, status, check, type, column } = props;
  const renderTableItem = () => {
    switch (type) {
      case 'text':
        return <Text column={column}>{children}</Text>;
      case 'status':
        return (
          <StatusContainer column={column}>
            <StatusBlock status={status}>{status}</StatusBlock>
          </StatusContainer>
        );
      default:
        break;
    }
  };
  return <Fragment>{renderTableItem()}</Fragment>;
};
export default TableItem;
