/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import { Github, Linkedin, Instagram } from '../components/Icons';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Layout title="Contact">
      <PageSection>
        <PageWrapper>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="intro__text">Contact.</h1>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="form-container"
            >
              <article>
                <p className="description">
                  Got a project in mind? Let's build something extraordinary
                  together. Reach out via the form or my social channels.
                </p>
              </article>

              <form method="POST" action="mailto:asacirovic90@gmail.com">
                <div className="fields">
                  <motion.div variants={itemVariants} className="field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="field">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="How can I help you?"
                      required
                    />
                  </motion.div>
                </div>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="submit-btn"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="socials-container"
            >
              <h3>Connect</h3>
              <div className="social-links">
                <a
                  href="https://github.com/umersacirovic2006/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <Github />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/umer-šaćirović-569698275/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/umersacirovic"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <Instagram />
                  <span>Instagram</span>
                </a>
              </div>

              <div className="email-direct">
                <p>Direct Email</p>
                <a href="mailto:asacirovic90@gmail.com">
                  asacirovic90@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Go Back Home
        </FooterLink>
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
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

  .contact-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 80px;

    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }

  .description {
    font-size: 1.2rem;
    color: var(--article-color);
    margin-bottom: 3rem;
    line-height: 1.6;
    max-width: 500px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .field {
      margin-bottom: 10px;
    }

    input,
    textarea {
      width: 100%;
      background: var(--gray-alpha);
      border: 1px solid var(--border-color);
      padding: 1.2rem;
      border-radius: 12px;
      color: var(--cw);
      font-family: inherit;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--cw);
        background: transparent;
      }
    }

    .submit-btn {
      margin-top: 1rem;
      padding: 1.2rem;
      border-radius: 12px;
      border: none;
      background: var(--cw);
      color: var(--bg);
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .socials-container {
    h3 {
      font-size: 1.5rem;
      font-weight: 800;
      margin-bottom: 2rem;
      letter-spacing: -0.02em;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .social-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 1.2rem;
      background: var(--gray-alpha);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      text-decoration: none;
      color: var(--cw);
      font-weight: 600;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

      svg {
        width: 20px;
        height: auto;
        fill: var(--article-color);
        transition: all 0.3s ease;
      }

      &:hover {
        transform: translateX(8px);
        border-color: var(--cw);
        background: transparent;
        svg {
          fill: var(--cw);
        }
      }
    }

    .email-direct {
      margin-top: 3rem;
      p {
        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--article-color);
        margin-bottom: 8px;
      }
      a {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--cw);
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }
`;

export default Contact;
