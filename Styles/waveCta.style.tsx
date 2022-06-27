import ButtonGroup from 'components/Buttons/ButtonGroup';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import Button from 'components/Buttons/Button';
import { media } from 'utils/media';

export const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

export const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

export const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;

export const ScheduleCallBtn = styled.div`
button{
  font-size: 14px;
  border: 0;
  background-color: #1672FF;
  color: white;
  border-radius: 10px;
  padding: 15px 40px;
}
`
