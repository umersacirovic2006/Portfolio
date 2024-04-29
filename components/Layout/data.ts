/* eslint-disable import/prefer-default-export */

import {
  createScoutAction,
  createScoutSection,
  createScoutPage,
} from 'scoutbar';
import PROJECTS_DATA from '../AppData/projects';

export const actions = (theme: () => void) => [
  createScoutAction({
    label: 'Home',
    href: '/',
    keyboardShortcut: ['h'],
  }),

  createScoutAction({
    label: 'Resume',
    href: '/resume',
    keyboardShortcut: ['r'],
  }),
  createScoutAction({
    label: 'Contact Me',
    href: '/contact',
    keyboardShortcut: ['c'],
  }),

  createScoutSection({
    label: 'About Umer',

    children: [
      createScoutAction({
        label: 'About Umer',
        href: '/about',
        keyboardShortcut: ['a'],
      }),
      createScoutAction({
        label: "Umer's Reads",
        href: '/about#reads',
      }),
      createScoutAction({
        label: 'Playlist',
        href: '/about#playlist',
      }),
      createScoutAction({
        label: "Umer's Lens",
        href: '/about#lens',
      }),
    ],
  }),

  createScoutSection({
    label: 'BY Codewonders',

    children: [
      createScoutPage({
        label: 'Projects',
        children: PROJECTS_DATA.map((project) =>
          createScoutAction({
            label: project.title,
            href: project.link,
            description: project.description,
            icon: project.imageUrl,
          })
        ),
      }),
    ],
  }),

  createScoutSection({
    label: 'Preference',

    children: [
      createScoutAction({
        label: 'Change Theme',
        action: () => theme(),
        keyboardShortcut: ['meta', 'l'],
      }),
    ],
  }),
];
