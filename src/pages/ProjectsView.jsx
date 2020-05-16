import React from 'react';

import FeatureCopy from '../components/FeatureContainer/FeatureCopy';
import Button from '../components/Objects/Button/Button';
import SocialMediaConstants from '../constants/social-media-constants';
import ProjectsSVG from '../assets/ProjectsSVG/ProjectsSVG';
import FeatureContainer from '../components/FeatureContainer/FeatureContainer';
import PageHeader from '../components/PageHeader/PageHeader';

export default function ProjectsView() {
  /************************************
   * Render
   ************************************/

  return (
    <div className="projects-view-container">
      <PageHeader title='Projects' img={<ProjectsSVG />}>
        <p>
          Contribute to one of our member-owned projects!
          Can’t find what you are looking for? Bring in a new project idea or existing project!
        </p>
      </PageHeader>
    </div>
  );
}
