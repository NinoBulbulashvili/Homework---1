import React from 'react';
import styled from 'styled-components';
import Project from './Project.js';
import image1 from '../project-1.jpg';
import image2 from '../project-2.jpg';
import image3 from '../project-3.jpg';
import image4 from '../project-4.jpg';
import image5 from '../project-5.jpg';
import image6 from '../project-6.jpg';

const SectionContainer = styled.section`
  padding: 100px 0 0;
  background-color: #f7af241a;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const ProjectsContainer = styled.div`
width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center ;
  padding: 0 100px;
  gap: 20px;
`;

const projectsData = [
  { id: 1, title: 'Agency Landing page', image: image1, category: 'Web/WordPress' },
  { id: 2, title: 'Agency Landing page', image: image2 , category: 'Web/WordPress' },
  { id: 3, title: 'Agency Landing page', image: image3, category: 'Web/WordPress' },
  { id: 4, title: 'Agency Landing page', image: image4, category: 'Web/WordPress' },
  { id: 5, title: 'Agency Landing page', image: image5, category: 'Web/WordPress' },
  { id: 6, title: 'Agency Landing page', image: image6, category: 'Web/WordPress' }
];

const LatestProjectsSection = () => {
  return (
    <SectionContainer>
      <Title>Latest Projects</Title>
      <ProjectsContainer>
        {projectsData.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default LatestProjectsSection;
