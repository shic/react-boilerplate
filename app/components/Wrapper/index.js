import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: 2em;
  margin: 1em;
  display: flex;
  align-items: center;
  position: relative;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
