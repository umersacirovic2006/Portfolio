import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const skills = [
    'C / C++ (Intermediate)',
    'Manual Memory Management',
    'Pointer Arithmetic',
    'Data Structures & Algorithms',
    'React / Next.js',
    'TypeScript',
    'Styled Components',
    'Framer Motion',
    'Linux (Arch / Hyprland)',
    'Git / GitHub',
  ];

  return (
    <Layout title="Resume">
      <PageSection>
        <PageWrapper>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="intro__text">Resumé.</h1>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="resume-container"
          >
            <div className="resume-grid">
              {/* Sidebar: Profile & Skills */}
              <aside className="resume-sidebar">
                <motion.div variants={itemVariants} className="profile-image">
                  {/* Temp Image Placeholder */}
                  <div className="img-placeholder">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="sidebar-section">
                  <h3>Education</h3>
                  <div className="edu-item">
                    <h4>UNINP</h4>
                    <p className="period">2025 — Present</p>
                    <p className="desc">Software Engineering</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="sidebar-section">
                  <h3>Skills</h3>
                  <div className="skills-grid">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </aside>

              {/* Main Content: Experience & Projects */}
              <main className="resume-main">
                <motion.section variants={itemVariants} className="main-section">
                  <h3>Experience & Projects</h3>

                  <div className="experience-item">
                    <div className="exp-header">
                      <h4>Low-Level Systems Architecture</h4>
                      <span>2024 — Present</span>
                    </div>
                    <p className="role">Independent Developer (C/C++)</p>
                    <ul>
                      <li>
                        Engineered a high-performance Matrix Manipulation
                        Library in C, focusing on raw pointer arithmetic and
                        efficient manual memory management to optimize linear
                        algebraic computations.
                      </li>
                      <li>
                        Developed a procedural game logic engine for classic
                        strategies, implementing complex state-machine patterns
                        and custom data structures to minimize overhead.
                      </li>
                      <li>
                        Spearheaded the transition from procedural C-style
                        architectures to modern C++ Object-Oriented paradigms,
                        leveraging STL containers and smart pointers for robust
                        memory safety.
                      </li>
                    </ul>
                  </div>

                  <div className="experience-item">
                    <div className="exp-header">
                      <h4>Frontend & UI Engineering</h4>
                      <span>2023 — Present</span>
                    </div>
                    <p className="role">Portfolio & Creative Projects</p>
                    <ul>
                      <li>
                        Crafted highly interactive and visually rich web
                        interfaces using Next.js and TypeScript, prioritizing
                        performance and accessible design patterns.
                      </li>
                      <li>
                        Integrated complex motion systems with Framer Motion to
                        create seamless page transitions and interactive micro-
                        interactions.
                      </li>
                    </ul>
                  </div>
                </motion.section>

                <motion.section variants={itemVariants} className="main-section">
                  <h3>Core Competencies</h3>
                  <p>
                    Focused on bridging the gap between high-level web
                    abstractions and low-level systems efficiency. Experienced in
                    debugging complex pointer-related issues and optimizing
                    resource usage in constrained environments.
                  </p>
                </motion.section>
              </main>
            </div>
          </motion.div>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now?
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

  .resume-container {
    background: var(--gray-alpha);
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 4rem;
    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  .resume-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 80px;

    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }

  .profile-image {
    width: 180px;
    height: 180px;
    border-radius: 24px;
    background: var(--mark);
    border: 1px solid var(--border-color);
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .img-placeholder {
      width: 100px;
      height: 100px;
      color: var(--article-color);
      opacity: 0.5;
    }
  }

  .sidebar-section {
    margin-bottom: 3rem;

    h3 {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--article-color);
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .edu-item {
      h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--cw);
        margin-bottom: 4px;
      }
      .period {
        font-size: 0.9rem;
        color: var(--article-color);
        margin-bottom: 4px;
      }
      .desc {
        font-weight: 500;
        color: var(--cw);
      }
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .skill-tag {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 6px 12px;
        background: var(--mark);
        border: 1px solid var(--border-color);
        border-radius: 100px;
        color: var(--article-color);
      }
    }
  }

  .resume-main {
    .main-section {
      margin-bottom: 4rem;

      h3 {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--cw);
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--article-color);
      }
    }

    .experience-item {
      margin-bottom: 3rem;

      .exp-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--cw);
        }
        span {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--article-color);
        }
      }

      .role {
        font-weight: 600;
        color: var(--cw);
        margin-bottom: 1.2rem;
      }

      ul {
        padding-left: 1.2rem;
        li {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--article-color);
          margin-bottom: 12px;
          &::marker {
            color: var(--cw);
          }
        }
      }
    }
  }
`;

export default Resume;
