/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ArticleContext } from '../components/Utils/context';
import { PageSection } from './projects';

const Articles = () => {
  const articles = useContext(ArticleContext);
  return (
    <Layout title="Articles">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Nothing yet...</h1>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Can you say hi now ?.
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

export default Articles;
