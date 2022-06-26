import WebCard from 'components/Cards/WebCard';
import React, { useState } from 'react';
import styled from 'styled-components';

const WebDevelopmentServices = () => {
  const [active, setActive] = useState<number>();
  //   const [activeRadio, setActiveRadio] = useState<string>();

  // console.warn(active);

  return (
    <MainDiv>
      <p style={{ fontSize: '22px', color: 'black' }}>Web development using CMS</p>
      <CardDiv>
        <WebCard onClick={() => setActive(1)} heading="Web Flow" />
        <WebCard onClick={() => setActive(2)} heading="React Js + WordPress" />
        <WebCard onClick={() => setActive(3)} heading="WordPress" />
        <WebCard onClick={() => setActive(4)} heading="Shopify" />
      </CardDiv>
      <HoverCard style={{ display: `${active === 1 ? 'block ' : 'none'}` }}>
        <DataDiv>
          <Left>
            <p style={{ fontSize: '20px' }}> Web Flow </p>
            <p style={{ fontSize: '16px' }}> Webflow is a must-have tool for any serious web designer or </p>
            <p style={{ fontSize: '16px' }}> entrepreneur who wants control over the look and layout of their site. </p>
            <p style={{ fontSize: '16px' }}> Budget </p>
            <span>
              <input style={{ color: '#FAFF00' }} type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
            </span>
            {/* <Button style={{ width:"100px", height:"60px" }} >Get Info</Button> */}
            <InfoButton>Get in Touch</InfoButton>
          </Left>
          <Right></Right>
        </DataDiv>
      </HoverCard>
      <HoverCard style={{ display: `${active === 2 ? 'block ' : 'none'}` }}>
        <DataDiv>
          <Left>
            <p style={{ fontSize: '20px' }}> React Js & Word Press </p>
            <p style={{ fontSize: '16px' }}> Webflow is a must-have tool for any serious web designer or </p>
            <p style={{ fontSize: '16px' }}> entrepreneur who wants control over the look and layout of their site. </p>
            <p style={{ fontSize: '16px' }}> Budget </p>
            <span>
              <input style={{ color: '#FAFF00' }} type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
            </span>
            {/* <Button style={{ width:"100px", height:"60px" }} >Get Info</Button> */}
            <InfoButton>Get in Touch</InfoButton>
          </Left>
          <Right></Right>
        </DataDiv>
      </HoverCard>
      <HoverCard style={{ display: `${active === 3 ? 'block ' : 'none'}` }}>
        <DataDiv>
          <Left>
            <p style={{ fontSize: '20px' }}>Word Press </p>
            <p style={{ fontSize: '16px' }}> Webflow is a must-have tool for any serious web designer or </p>
            <p style={{ fontSize: '16px' }}> entrepreneur who wants control over the look and layout of their site. </p>
            <p style={{ fontSize: '16px' }}> Budget </p>
            <span>
              <input style={{ color: '#FAFF00' }} type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
            </span>
            {/* <Button style={{ width:"100px", height:"60px" }} >Get Info</Button> */}
            <InfoButton>Get in Touch</InfoButton>
          </Left>
          <Right></Right>
        </DataDiv>
      </HoverCard>
      <HoverCard style={{ display: `${active === 4 ? 'block ' : 'none'}` }}>
        <DataDiv>
          <Left>
            <p style={{ fontSize: '20px' }}> Shopify</p>
            <p style={{ fontSize: '16px' }}> Webflow is a must-have tool for any serious web designer or </p>
            <p style={{ fontSize: '16px' }}> entrepreneur who wants control over the look and layout of their site. </p>
            <p style={{ fontSize: '16px' }}> Budget </p>
            <span>
              <input style={{ color: '#FAFF00' }} type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
              <input type="radio" name="600" value="600" />
              <label style={{ color: 'black' }}>$600</label>
            </span>
            {/* <Button style={{ width:"100px", height:"60px" }} >Get Info</Button> */}
            <InfoButton>Get in Touch</InfoButton>
          </Left>
          <Right></Right>
        </DataDiv>
      </HoverCard>
    </MainDiv>
  );
};

export default WebDevelopmentServices;

const InfoButton = styled.button`
  width: 100px;
  font-size: 16px;
  border: 1px solid blue;
  border-radius: 10px;
  height: 56px;
  width: 179px;
  background-color: #ffffff;
  text-decoration: none;
  display: inline-block;
`;

const DataDiv = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: black;
  }
  span {
    display: flex;
    gap: 20px;
  }
`;
const Right = styled.div`
  width: 500px;
  height: 320px;
  background-color: grey;
`;
const HoverCard = styled.div`
  display: flex;
  gap: 10px;
  padding: 120px 10px;
`;

const CardDiv = styled.div`
  display: flex;
  gap: 66px;
  padding-top: 20px;
`;

const MainDiv = styled.div`
  display: flex;
  max-width: 130rem;
  margin: auto;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background-color: white;
  padding: 20px;
`;
