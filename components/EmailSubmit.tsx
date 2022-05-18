import React from "react"
import styled from 'styled-components';
import { media } from 'utils/media';



export default function EmailSubmit() {
    return(
        <Email>
            <Heading>Let’s start a conversation</Heading>
            <Form action="#" method="post">
                <Input type="text" name="Email" placeholder="Enter your email..." />
                <Button type="submit" value="submit" />
            </Form>
            <Summary>We care about the protection of your data. Read our privacy policy.</Summary>
        
        </Email>
    )
}



// container style 
const Email = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 100%;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

// heading style 
const Heading = styled.h2`
    font-weight: 700;
    font-size: 14px;

  ${media('<=desktop')} {

  }
`;

// form  style 
const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 100%;

  ${media('<=desktop')} {
    
  }
`;

// input field style 
const Input = styled.input`

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 20px;
    gap: 10px;

    width: 100%;
    height: 49px;
    font-size: 14px;

    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  

  ${media('<=desktop')} {
    
  }
`;

// button style 
const Button = styled.input`
    width: 150px;
    height: 47px;

    background: #000000;
    border-radius: 5px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 118%;
    text-align: center;
    border: 0px;
    cursor: pointer;
  

  ${media('<=desktop')} {
    
  }
`;


// paragraph style 
const Summary = styled.p`
    font-weight: 400;
    font-size: 14px;

  ${media('<=desktop')} {
    
  }
`;