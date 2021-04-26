import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const TableHeader = styled.div`
  display: flex;
  background-color: #f1f9ff;
  padding: 10px 2rem;
  color: #003561;
  margin: 0;
  font-weight: 500;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const columns = css`
  width: calc(100% / ${(props) => props.column});
  min-width: calc(100% / ${(props) => props.column});
  flex-grow: ${(props) => (props.column === 0 ? 1 : 0)};
`;

export const TableHeaderText = styled.p`
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  text-align: center;
  ${columns};
  width: calc(100% / ${(props) => props.column});
  min-width: calc(100% / ${(props) => props.column});
  flex-grow: ${(props) => (props.column === 0 ? 1 : 0)};
`;

export const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: center;
  word-wrap: break-word;
  font-weight: ${(props) => props.fontWeight};
  ${columns}
`;

export const StatusContainer = styled.div`
  ${columns};
  display: flex;
  color: white;
  justify-content: center;
`;

export const StatusBlock = styled.p`
  width: 60%;
  padding: 10px 0;
  font-size: 12px;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
  ${(props) => (props.status === 'Completed' ? tw`bg-green-50` : tw`bg-red-50`)};
  ${(props) => (props.status === 'Completed' ? tw`text-green-400` : tw`text-red-400`)};
`;

export const Row = styled.div`
  display: flex;
  /* color: var(--clr-text-primary-main); */
  width: 100%;
  align-items: center;
  padding: 0 1rem;
  min-height: 50px;
`;
