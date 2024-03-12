import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  width: 400px
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1 1 30%;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Category = styled.p`
  font-size: 14px;
  color: #666;
`;



const ProjectItem = ({ title, image, category }) => {
  return (
    <ProjectContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </Content>
    </ProjectContainer>
  );
};

export default ProjectItem;
