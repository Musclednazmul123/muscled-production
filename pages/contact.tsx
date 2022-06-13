import Page from 'components/Page';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import { ContactContainer } from 'Styles/contact.style';

export default function ContactPage() {
  return (
    <Page title="Contact" description="Minim sint aliquip nostrud excepteur cupidatat amet do laborum exercitation cupidatat ea proident.">
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}
