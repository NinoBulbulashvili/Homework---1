import React from 'react';
import styled from 'styled-components';
import image1 from '../avatar-2.jpg';
import image2 from '../avatar-3.jpg';
import image3 from '../avatar-4.jpg';

const SectionContainer = styled.section`
  background-color: #ffffff;
  padding: 100px 0;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Testimonial = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const ClientName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ClientMessage = styled.p`
  font-style: italic;
`;

const ClientImage = styled.img`
  width: 100px; 
  height: 100px; 
  border-radius: 50%; 
  margin: 0 auto; 
  display: block;
`;

const ClientsKindWords = () => {
  return (
    <SectionContainer>
      <Title>Client's Kind Words</Title>
      <TestimonialsContainer>
        <Testimonial>
        <ClientImage src={image1} alt="Client Image" />
          <ClientMessage>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</ClientMessage>
          <ClientName>John Doe</ClientName>
          
        </Testimonial>
        <Testimonial>
        <ClientImage src={image2} alt="Client Image" />
          <ClientMessage>"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</ClientMessage>
          <ClientName>Jane Smith</ClientName>
        </Testimonial>
        <Testimonial>
        <ClientImage src={image3} alt="Client Image" />
          <ClientMessage>"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</ClientMessage>
          <ClientName>Jeniffer Lutheran</ClientName>
        </Testimonial>
      </TestimonialsContainer>
    </SectionContainer>
  );
};

export default ClientsKindWords;
