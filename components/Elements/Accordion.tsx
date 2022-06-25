import { PropsWithChildren, useState } from 'react';
import { AccordionWrapper, Description, Icon, Title, TitleWrapper } from 'Styles/accordion.style';
import Collapse from '../Icons/Collapse';
import RichText from '../../Styles/RichText';

interface AccordionProps {
  title: string;
  isOpen?: boolean;
}

export default function Accordion({ title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon chakra-accordion__icon css-j2ph2z"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive} duration={300}>
        <Description>
          <RichText>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}
