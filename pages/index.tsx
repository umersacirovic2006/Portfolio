/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';

const Home = () => (
  <Layout>
    <PageSection>
      <PageWrapper>
        <div className="hero-container">
          <article className="hero-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="status-badge"
            >
              <span className="dot" />
              Available for new projects
            </motion.div>

            <motion.h1
              className="intro__text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Umer <br />
              Sacirovic
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="cta-group"
            >
              <Link href="/projects" className="cta-button primary">
                View Projects
              </Link>
              <Link href="/about" className="cta-button secondary">
                More About Me
              </Link>
            </motion.div>
          </article>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hero-visual"
          >
            <div className="terminal-shell">
              <div className="terminal-header">
                <div className="dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminal-title">zsh — umer@archlinux</div>
              </div>
              <div className="terminal-body">
                <div className="neofetch-container">
                  <div className="ascii-art">
                    <pre>
                      {`
       /\\
      /  \\
     /    \\
    /      \\
   /   ,,   \\
  /   |  |   \\
 /    -''-    \\
/              \\
`}
                    </pre>
                  </div>
                  <div className="system-info">
                    <div className="user-host">
                      <span className="user">umer</span>@
                      <span className="host">arch</span>
                    </div>
                    <div className="separator">----------------</div>
                    <div className="info-line">
                      <span className="label">OS:</span> Arch Linux
                    </div>
                    <div className="info-line">
                      <span className="label">Kernel:</span> 6.8.5
                    </div>
                    <div className="info-line">
                      <span className="label">WM:</span> Hyprland
                    </div>
                    <div className="info-line">
                      <span className="label">Shell:</span> zsh 5.9
                    </div>
                    <div className="info-line">
                      <span className="label">Stack:</span> Next.js, TS
                    </div>

                    <div className="color-blocks">
                      <span className="block black" />
                      <span className="block red" />
                      <span className="block blue" />
                      <span className="block white" />
                    </div>
                  </div>
                </div>
                <div className="terminal-footer">
                  <div className="command-line">
                    <span className="prompt">➜</span>{' '}
                    <span className="path">~</span> <span className="cursor" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </PageSection>
  </Layout>
);

const PageSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;

  .hero-container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    min-width: 90vw;
    min-height: 70vh;
    gap: 40px;

    @media (max-width: 1100px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;
      min-height: auto;
      gap: 80px;
    }
  }

  .hero-content {
    flex: 1;
    align-self: flex-start;
    padding-top: 40px;
    z-index: 2;

    @media (max-width: 1100px) {
      padding-top: 0;
    }
  }

  .hero-visual {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    z-index: 1;

    @media (max-width: 1100px) {
      justify-content: center;
      align-self: center;
    }
  }

  .status-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--gray-alpha);
    border: 1px solid var(--border-color);
    padding: 6px 14px;
    border-radius: 100px;
    width: fit-content;
    font-size: 13px;
    font-weight: 500;
    color: var(--article-color);
    margin-bottom: 2rem;

    .dot {
      width: 8px;
      height: 8px;
      background: #34c759;
      border-radius: 50%;
      box-shadow: 0 0 10px #34c759aa;
    }
  }

  .intro__text {
    font-size: 5.5rem;
    line-height: 0.9;
    font-weight: 800;
    letter-spacing: -0.05em;
    margin-bottom: 3.5rem;
    text-transform: none;
    color: var(--cw);

    @media (max-width: 1200px) {
      font-size: 4.5rem;
    }
    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  .cta-group {
    display: flex;
    gap: 16px;

    .cta-button {
      padding: 14px 32px;
      border-radius: 14px;
      font-weight: 600;
      font-size: 15px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      text-decoration: none;

      &.primary {
        background: var(--cw);
        color: var(--bg);
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.3);
        }
      }

      &.secondary {
        background: transparent;
        border: 1px solid var(--border-color);
        color: var(--cw);
        &:hover {
          background: var(--gray-alpha);
          transform: translateY(-2px);
        }
      }
    }
  }

  .terminal-shell {
    background: var(--gray-alpha);
    backdrop-filter: blur(20px) saturate(160%);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.3);
    text-align: left;
    display: flex;
    flex-direction: column;

    .terminal-header {
      background: rgba(var(--theme-amount), 0, 0, 0.2);
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color);

      .dots {
        display: flex;
        gap: 8px;
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          &.red {
            background: #ff5f56;
          }
          &.yellow {
            background: #ffbd2e;
          }
          &.green {
            background: #27c93f;
          }
        }
      }

      .terminal-title {
        font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', monospace;
        font-size: 11px;
        color: var(--article-color);
        font-weight: 500;
        opacity: 0.7;
      }
    }

    .terminal-body {
      padding: 24px;
      font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', monospace;
      font-size: 14px;
      color: var(--article-color);
      line-height: 1.6;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .neofetch-container {
        display: flex;
        gap: 32px;
        align-items: flex-start;
        margin-bottom: 20px;

        .ascii-art {
          color: #3b82f6;
          height: auto;
          font-weight: bold;

          pre {
            margin: 0;
            line-height: 1.2;
            overflow: hidden;
            white-space: pre;
          }
        }

        .system-info {
          .user-host {
            font-size: 16px;
            font-weight: 700;
            .user {
              color: #3b82f6;
            }
            .host {
              color: #3b82f6;
            }
          }
          .separator {
            color: var(--article-color);
            opacity: 0.5;
            margin: 4px 0;
          }
          .info-line {
            .label {
              color: #3b82f6;
              font-weight: 600;
              margin-right: 8px;
            }
          }
          .color-blocks {
            display: flex;
            gap: 0;
            margin-top: 12px;
            .block {
              width: 20px;
              height: 20px;
              &.black {
                background: #000;
              }
              &.red {
                background: #ff5f56;
              }
              &.green {
                background: #27c93f;
              }
              &.yellow {
                background: #ffbd2e;
              }
              &.blue {
                background: #3b82f6;
              }
              &.magenta {
                background: #d33682;
              }
              &.cyan {
                background: #2aa198;
              }
              &.white {
                background: #eee;
              }
            }
          }
        }
      }

      .terminal-footer {
        border-top: 1px solid var(--border-color);
        padding-top: 12px;
        margin-top: auto;
        opacity: 0.8;
      }

      .command-line {
        color: var(--cw);
        font-weight: 600;

        .prompt {
          color: #27c93f;
          margin-right: 8px;
        }
        .path {
          color: #3b82f6;
          margin-right: 8px;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 18px;
          background: var(--cw);
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
      }
    }
  }

  @keyframes blink {
    from,
    to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;
export default Home;
