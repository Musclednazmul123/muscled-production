import styled from 'styled-components';

export const Caption = styled.small`
  position: relative;
  top: -2.2rem;
  word-break: break-word;
  font-size: 1.2rem;
`;

export const CopyButton = styled.button<{ copied: boolean }>`
  position: absolute;
  border: none;
  top: 2.4rem;
  right: 2.4rem;
  visibility: hidden;
  background-color: rgba(var(--secondary), 0.1);
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  line-height: normal;
  border-radius: 0.3rem;
  color: rgb(var(--text));
  z-index: 1;
  line-height: 1;

  &::after {
    position: absolute;
    content: 'Copied';
    visibility: ${(p) => (p.copied ? 'visible' : 'hidden')};
    top: 0;
    left: -4rem;
    height: 3rem;
    font-weight: bold;
    border-radius: 0.3rem;
    line-height: 1.5;
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    color: rgb(var(--primary));
    background-color: rgb(var(--secondary));
  }

  &:hover {
    background-color: rgba(var(--secondary), 0.2);
  }
`;

export const CodeWrapper = styled.div<{ language: string }>`
  position: relative;
  border-radius: 0.3em;
  margin-top: 4.5rem;
  transition: visibility 0.1s;
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &::after {
    position: absolute;
    height: 2.2em;
    content: '${(p) => p.language}';
    right: 2.4rem;
    padding: 1.2rem;
    top: -2em;
    line-height: 1rem;
    border-radius: 0.3em;
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: inherit;
    font-weight: bold;
    text-align: center;
  }

  &:hover {
    ${CopyButton} {
      visibility: visible;
    }
  }
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

export const Line = styled.div`
  display: flex;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
