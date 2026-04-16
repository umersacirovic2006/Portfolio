/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Layout title="Project">
      <PageSection>
        <PageWrapper>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="intro__text">Projects.</h1>
          </motion.div>

          <Tabs>
            <TabItems label="All">
              <ProjectsContext.Consumer>
                {(projectsData) => (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <MansoryLayout>
                      {projectsData.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <MansoryItem item={item} />
                        </motion.div>
                      ))}
                    </MansoryLayout>
                  </motion.div>
                )}
              </ProjectsContext.Consumer>
            </TabItems>
          </Tabs>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <FooterLink goto="/resume" className="mt-3 mb-5">
            Lets Go To My Resume.
          </FooterLink>
        </motion.div>
      </PageWrapper>
    </Layout>
  );
};

export const PageSection = styled.div`
  padding-bottom: 100px;

  .intro__text {
    font-size: 5.5rem;
    line-height: 0.9;
    font-weight: 800;
    letter-spacing: -0.05em;
    margin: 6rem 0rem 3.5rem;
    color: var(--cw);

    @media (max-width: 1200px) {
      font-size: 4.5rem;
    }
    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
`;

export default Projects;

