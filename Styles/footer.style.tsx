import styled from 'styled-components';
import { media } from 'utils/media';

export const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

export const FooterNewsletter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 80px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
`;

// export const FooterContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 40px;
// `;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

export const ListHeader = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

export const ListItemWrapper = styled.p`
  font-size: 14px;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

export const ShareBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

export const BottomBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
