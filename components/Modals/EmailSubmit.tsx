import React from 'react';
import { Input, Email, Heading, Form, Button, Summary } from 'Styles/emailSubmit.style';

export default function EmailSubmit() {
  return (
    <Email>
      <Heading>Let’s start a conversation</Heading>
      <Form action="#" method="post">
        <Input type="text" name="Email" placeholder="Enter your email..." />
        <Button type="submit" value="submit" />
      </Form>
      <Summary>We care about the protection of your data. Read our privacy policy.</Summary>
    </Email>
  );
}
