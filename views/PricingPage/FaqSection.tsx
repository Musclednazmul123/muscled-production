import styled from 'styled-components';
import Accordion from 'components/Elements/Accordion';
import SectionTitle from 'Styles/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What kind of clients do you work with?">
        We work with businesses of all size, mainly small and medium businesses (SMBs). No matter how big our client, the fundamentals remain the same: Define the problem, measure, analyze, improve and control. We apply this approach with software development and digital advertising and search engine optimization.
      </Accordion>
      <Accordion title="What makes Muscled stand out from other service providers?">
        Our relentless effort to stay ahead of all the new and exciting features that Shopify releases every few months. Shopify is a high growth company and it is working hard to cement its dominance in the E-Commerce world through acquiring fullfillment companies, allowing app developers more access and tools to create functionalities that weren't possible before. The point is, Shopify is constantly releasing new features and Muscled stays up to date with all of its best practices.
      </Accordion>
      <Accordion title="What can I expect as a client when working with Muscled?">
        All clients are connected to a member from the Client Success Team who is the liaison between the Design, Dev and DevOps Team.
      </Accordion>
      <Accordion title="How can I be a great client?">
        Depending on the service we are providing, you can always be a great client by reading our valuable and informative guides or taking our course that will help you not only deal better with us but with other professionals in the tech and digital marketing industry.
      </Accordion>
      <Accordion title="What is your 100% Money Back Guarantee about?">
        As you may have guessed it, we provide you with 100% refund if we do not fulfill what we promised to you. We want to make sure you have a positive experience when working with Muscled and we back our process 100%. Because of our confidence in our process, we are positive we will provide you with a rewarding experience at the Muscled Digital Gym!
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 130rem;
  padding: 20px; 
  margin: 15rem auto;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
