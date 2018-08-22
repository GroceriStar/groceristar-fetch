/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'GroceriStar Fetch Module' /* title for your website */,
  tagline: 'Documentation',
  //url: 'https://your-docusaurus-test-site.com' /* your website url */,
  //baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
     url: 'https://groceristar.github.io',
     baseUrl: '/groceristar-fetch/',

  // Used for publishing and more
  projectName: 'groceristar-fetch',
  organizationName: 'groceristar',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
     {doc: 'summary', label: 'Summary'},
       {href : 'https://github.com/GroceriStar/groceristar-fetch/', label: 'GitHub'},
    {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  // https://raw.githubusercontent.com/GroceriStar/creative/master/logo/LOGO1.png
  headerIcon: 'img/LOGO1.png',
  footerIcon: 'img/LOGO1.png',
  favicon: 'img/LOGO1.png',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' GroceriStar company',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/GroceriStar/groceristar-fetch',
};

module.exports = siteConfig;
