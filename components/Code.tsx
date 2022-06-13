import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React from 'react';
import styled from 'styled-components';
import ClientOnly from 'components/ClientOnly';
import { useClipboard } from 'hooks/useClipboard';
import { CopyButton, CodeWrapper, Pre, Line, LineNo, LineContent, Caption } from 'Styles/code.style';

export interface CodeProps {
  code: string;
  language?: Language;
  selectedLines?: number[];
  withCopyButton?: boolean;
  withLineNumbers?: boolean;
  caption?: string;
}

export default function Code({
  code,
  language = 'javascript',
  selectedLines = [],
  withCopyButton = true,
  withLineNumbers,
  caption,
}: CodeProps) {
  const { copy, copied } = useClipboard({
    copiedTimeout: 600,
  });

  function handleCopyClick(code: string) {
    copy(code);
  }

  const copyButtonMarkup = (
    <ClientOnly>
      <CopyButton copied={copied} onClick={() => handleCopyClick(code)}>
        <CopyIcon />
      </CopyButton>
    </ClientOnly>
  );

  return (
    <>
      <Highlight {...defaultProps} theme={undefined} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <CodeWrapper className="code-wrapper" language={language}>
              {withCopyButton && copyButtonMarkup}
              <Pre className={className} style={style}>
                {tokens.map((line, i) => {
                  const lineNumber = i + 1;
                  const isSelected = selectedLines.includes(lineNumber);
                  const lineProps = getLineProps({ line, key: i });
                  const className = lineProps.className + (isSelected ? ' selected-line' : '');

                  return (
                    <Line key={i} {...{ ...lineProps, className }}>
                      {withLineNumbers && <LineNo>{lineNumber}</LineNo>}
                      <LineContent>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </LineContent>
                    </Line>
                  );
                })}
              </Pre>
            </CodeWrapper>
            {caption && <Caption>{caption}</Caption>}
          </>
        )}
      </Highlight>
    </>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi">
      <path
        fill="currentColor"
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
      ></path>
    </svg>
  );
}
