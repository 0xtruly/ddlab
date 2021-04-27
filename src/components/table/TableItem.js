import React, { Fragment } from 'react';
import { Text, StatusContainer, StatusBlock, SelectContainer } from './TableTemplate.style';
import CheckIcon from '../../assets/icons/check';
import UncheckIcon from '../../assets/icons/uncheck';

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
      case 'select':
        return (
          <SelectContainer column={column}>
            <CheckIcon />
          </SelectContainer>
        );
      default:
        break;
    }
  };
  return <Fragment>{renderTableItem()}</Fragment>;
};
export default TableItem;
