import { PropsWithChildren } from 'react';
import { CustomButton, CustomRichText, Description, Price, PriceContainer, Title, Wrapper } from 'Styles/pricingCard.style';

interface PricingCardProps {
  title: string;
  description: string;
  benefits: string[];
  isOutlined?: boolean;
}

export default function PricingCard({ title, description, benefits, isOutlined, children }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Wrapper isOutlined={isOutlined}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>{children}</Price>
        {isAnyBenefitPresent && (
          <CustomRichText>
            <ul>
              {benefits.map((singleBenefit, idx) => (
                <li key={idx}>{singleBenefit}</li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PriceContainer>
      <CustomButton>Get started</CustomButton>
    </Wrapper>
  );
}
