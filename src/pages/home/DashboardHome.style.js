import styled from 'styled-components';
import tw from 'twin.macro';

export const Content = styled.div``;

export const Wrap = styled.div``;

export const Main = styled.div`
  display: flex;
  justify-content: flex-end;
  /* height: 100vh; */
  padding-top: 2rem;
  padding-left: 5rem;
  ${tw`divide-x divide divide-gray-200`}
`;

export const Container = styled.div`
  display: ${(props) => props.display};
  width: 100%;
  padding: ${(props) => props.padding || '10px 1.5rem'};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
`;

export const SearchContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #f0f9ff;
  box-shadow: 0px 4px 4px #dedde2;
  align-items: center;
  padding: 0;
  display: flex;
  padding: 0.5rem;
  input {
    background-color: #f0f9ff;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  ${tw`rounded-md`};
  background-color: #03a9f4;
  color: white;
  font-size: 14px;
  width: 8rem;
  margin-left: 1.5rem;
  padding: 5px;
`;

export const MainContent = styled.div`
  height: 100vh;
  width: 70%;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px red;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px white;
    border-radius: 5px;
  }
`;

export const Aside = styled.div`
  display: flex;
  /* height: 100vh; */
  background-color: white;
  /* width: 30%; */
  flex-direction: column;
  align-items: center;
`;
