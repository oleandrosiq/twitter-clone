import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)'};
  
  background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
  border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};
  border-radius: 25px;

  padding: 16px;
  outline: 0;
  
  cursor: pointer;

  &:hover {
    background: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
  }
`;