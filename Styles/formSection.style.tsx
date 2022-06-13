import styled from 'styled-components';
import { Input } from 'tinacms';
import { media } from 'utils/media';

export const Wrapper = styled.div`
  flex: 2;
`;

export const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;

export const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

export const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`;

export const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`;
