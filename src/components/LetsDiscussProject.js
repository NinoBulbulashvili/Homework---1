import React from 'react';
import styled from 'styled-components';
import imageNew from '../imagenew.png';
import phone from '../phone.png'; 
import mail from '../mail.png'; 
import map from '../map.png'; 

const SectionContainer = styled.section`
  background-color: #f7af241a;
  padding: 100px 0;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
`;

const FormContainer = styled.div`
  flex: 1;
  padding-right: 50px;
  border: 1px solid #000;
  border-radius: 8px; 
  background-color: #ffffff;
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left:30px ;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-left: 20px;
  
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f7af24;
  color: #fff;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 20px;

  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;

const ContactInfoItem = styled.p`
  margin: 0;
  font-size:24px;
  font-style: bold;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  
  margin: 0 auto;
`;

const ContactIcon = styled.img`
  height: 30px;
  width: 30px;
`;


const LetsDiscussProject = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <FormContainer>
          <Title>Get in touch</Title>
          <p style = {{marginLeft: '20px'}}>Our friendly team would love to hear from you.</p>
          <FormGroup>
            <Label htmlFor="name">First Name:</Label>
            <Input type="text" id="name" name="name" placeholder="First name*" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Your Email:</Label>
            <Input type="email" id="email" name="email" placeholder="Email*" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Subject:</Label>
            <Input type="text" id="subject" name="subject" placeholder="Subject*" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" rows="5" placeholder="Enter your message"></TextArea>
          </FormGroup>
          <Button type="submit">Send message</Button>
        </FormContainer>
        <ContactInfoContainer>
          <Title>Contact Info</Title>
          <ContactIcon src={phone} alt="Phone" />
          <ContactInfoItem style= {{fontWeight: 'bold'}}> Phone:</ContactInfoItem>
          <ContactInfoItem>+01 123 654 8096</ContactInfoItem>
          <p></p>
          <ContactIcon src={mail} alt="Mail" />
          <ContactInfoItem style= {{fontWeight: 'bold'}}>Mail: </ContactInfoItem>
          <ContactInfoItem>info@domainname.com</ContactInfoItem>
          <p></p>
          <ContactIcon src={map} alt="Map" />
          <ContactInfoItem style= {{fontWeight: 'bold'}}>Visit My Studio </ContactInfoItem>
          <ContactInfoItem> Warnwe Park Streetperrine, FL 33157 New York City</ContactInfoItem>
          <Image src={imageNew} alt="Contact Image" />
        </ContactInfoContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default LetsDiscussProject; 

       