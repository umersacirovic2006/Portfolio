/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Github, Product } from '../components/Icons';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="intro__text">About Me.</h1>
          </motion.div>

          <motion.article
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="timeline">
              <motion.li variants={itemVariants} className="mt-2">
                <div className="timeline-header">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Github Link"
                    href="https://github.com/umersacirovic2006/"
                    className="category-link"
                  >
                    Engineering{' '}
                    <small>
                      <Github />
                    </small>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Github Link"
                    id="cardHover"
                    href="https://github.com/umersacirovic2006/"
                    className="view-link"
                  >
                    View Github
                  </a>
                </div>
                <p>
                  The power of first impressions cannot be underestimated, and
                  the gateway to capitalizing on them lies in exceptional
                  website design. An outstanding website transcends mere
                  aesthetics and extends its influence to encompass seamless
                  functionality and user-friendly navigation. Drawing upon my
                  expertise as a seasoned programmer, I possess the unique
                  ability to tackle intricate technical challenges while
                  crafting websites that exude sleekness and visual allure.
                  Moreover, my extensive knowledge of recognized technical
                  standards is complemented by my proficiency in modern building
                  practices, ensuring that every aspect of your website is
                  finely tuned to perfection.
                </p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <div className="timeline-header">
                  <Link
                    href="/projects"
                    aria-label="Open Products Page"
                    className="category-link"
                  >
                    Product{' '}
                    <small>
                      <Product />
                    </small>
                  </Link>
                  <Link
                    href="/projects"
                    aria-label="Open Products Page"
                    id="cardHover"
                    className="view-link"
                  >
                    View Products
                  </Link>
                </div>
                <p>
                  While I may not fit the conventional mold of a product
                  manager, my diverse skill set in research, product design, and
                  product coordination empowers me to drive the growth of a
                  product from its inception. As an exceptional analytical
                  thinker, I possess the ability to uphold the product's vision
                  throughout its entire journey, effectively bridging the
                  technical and product aspects. By leveraging my expertise, I
                  can navigate the path from 0 to 1, ensuring the product's
                  success at every stage.
                </p>
              </motion.li>
            </ul>
          </motion.article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <FooterLink goto="/projects" className="mt-3 mb-5">
            Lets Continue To Projects
          </FooterLink>
        </motion.div>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
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

  p {
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.8;
    font-weight: 400;
    color: var(--article-color);
    max-width: 800px;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 2rem;

    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 10;
    }

    li {
      margin-bottom: 5rem;
      position: relative;

      &:before {
        content: ' ';
        background: var(--bg);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -37px;
        width: 12px;
        height: 12px;
        top: 8px;
        z-index: 20;
        transition: all 0.3s ease;
      }

      &:hover:before {
        background: var(--cw);
        transform: scale(1.2);
      }

      .timeline-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 800px;

        @media (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
      }

      .category-link {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--cw);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
          width: 18px;
          height: auto;
          fill: var(--article-color);
        }
      }

      .view-link {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--article-color);
        text-decoration: none;
        padding: 6px 16px;
        border: 1px solid var(--border-color);
        border-radius: 100px;
        transition: all 0.3s ease;

        &:hover {
          background: var(--gray-alpha);
          color: var(--cw);
          border-color: var(--cw);
        }
      }
    }
  }
`;

export default About;
