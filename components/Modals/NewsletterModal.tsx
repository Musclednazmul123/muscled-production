import React, { useState } from 'react';
import MailchimpSubscribe, { DefaultFormFields } from 'react-mailchimp-subscribe';
import { EnvVars } from 'env';
import useEscClose from 'hooks/useEscKey';
import CloseIcon from '../Icons/CloseIcon';
import Container from '../Elements/Container';

import MailSentState from '../MailSentState';
import Overlay from '../Elements/Overlay';
import { CloseIconContainer, Card, Title, Row, CustomInput, CustomButton, ErrorMessage } from 'Styles/newsLetterModal.style';

export interface NewsletterModalProps {
  onClose: () => void;
}

export default function NewsletterModal({ onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');

  useEscClose({ onClose });

  function onSubmit(event: React.FormEvent<HTMLFormElement>, enrollNewsletter: (props: DefaultFormFields) => void) {
    event.preventDefault();
    console.log({ email });
    if (email) {
      enrollNewsletter({ EMAIL: email });
    }
  }

  return (
    <MailchimpSubscribe
      url={EnvVars.MAILCHIMP_SUBSCRIBE_URL}
      render={({ subscribe, status, message }) => {
        const hasSignedUp = status === 'success';
        return (
          <Overlay>
            <Container>
              <Card onSubmit={(event: React.FormEvent<HTMLFormElement>) => onSubmit(event, subscribe)}>
                <CloseIconContainer>
                  <CloseIcon onClick={onClose} />
                </CloseIconContainer>
                {hasSignedUp && <MailSentState />}
                {!hasSignedUp && (
                  <>
                    <Title>Are you ready to enroll to the best newsletter ever?</Title>
                    <Row>
                      <CustomInput
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        required
                      />
                      <CustomButton as="button" type="submit" disabled={hasSignedUp}>
                        Submit
                      </CustomButton>
                    </Row>
                    {message && <ErrorMessage dangerouslySetInnerHTML={{ __html: message as string }} />}
                  </>
                )}
              </Card>
            </Container>
          </Overlay>
        );
      }}
    />
  );
}
