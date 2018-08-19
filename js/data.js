var devicons = {
  python: {
    icon: 'devicon-python-plain',
    text: 'Python'
  },
  html: {
    icon: 'devicon-html5-plain',
    text: 'HTML5'
  },
  css: {
    icon: 'devicon-css3-plain',
    text: 'CSS3'
  },
  javascript: {
    icon: 'devicon-javascript-plain',
    text: 'JavaScript'
  },
  google: {
    icon: 'devicon-google-plain',
    text: 'Google'
  },
  git: {
    icon: 'devicon-git-plain',
    text: 'Git'
  },
  bootstrap: {
    icon: 'devicon-bootstrap-plain',
    text: 'Bootstrap'
  },
  jquery: {
    icon: 'devicon-jquery-plain',
    text: 'jQuery'
  }
}

var projectData = [
  { image: 'images/hidden-gems.png',
    thumbnail: 'images/hidden-gems-thumb.png',
    video: '',
    name: 'Hidden Gems',
    links: [
      {name: 'Live Site', src: './ExecutiveOrder66/'},
      {name: 'Github', src: 'https://github.com/iangornall/ExecutiveOrder66'}
    ],
    description: ['Website built in an agile group of three software engineers in one week.  Firebase: auth & database.', 'Personal Responsibilities:'],
    list: ['Set up and implement Google Search and Map APIs.',  'Populate DOM with elements holding information from Firebase Database.', 'Flash message implementation with success and error feedback.', 'Database security rules.', 'Data filtering by type and search.', 'Pagination.', 'Layout modification for mobile.'],
    devicons: [
      'html', 'css', 'javascript', 'google'
    ]
  },
  { image: 'images/jetpack-math.png',
    thumbnail: 'images/jetpack-math-thumb.png',
    video: 'https://www.youtube.com/embed/b66tvX5JW5Q?rel=0',
    name: 'Jetpack Math',
    links: [
      {name: 'Github', src: 'https://github.com/iangornall/jetpack-math'}
    ],
    description: ['Video game for learning basic math operations.  Built entirely by me using Python 2 and pygame.', 'Featuring:'],
    list: ['Jet pack physics with gravity and thrust',
    'Sprite animation',
    'Collision detection',
    'Fully resizable windowed mode',
    'Full screen mode',
    'Randomly generated math facts and solutions',
    'Randomly generated decoy answers',
    'Scoring and life system'],
    devicons: [
      'python', 'git'
    ]
  },
  { image: 'images/gummi-gram.png',
    thumbnail: 'images/gummi-gram-thumb.png',
    video: '',
    name: 'Gummi Gram',
    links: [
      {name: 'Live Site', src: './gummi-gram/'},
      {name: 'Github', src: 'https://github.com/iangornall/gummi-gram'}
    ],
    description: ['Feast your eyeballs on delicious gummi goodness.  Project built entirely by me using vanilla HTML, CSS, and JavaScript.  Featuring:'],
    list: ['Full Screen API', 'Swipe detection with HammerJS', 'Carousel modals', 'Responsive mobile-first layout', 'DOM population from a JS object', 'Lightbox and shadow effects', 'Transitions on and off screen'],
    devicons: [
      'html', 'css', 'javascript', 'git'
    ]
  },
  { image: 'images/wikipedia-viewer.png',
    thumbnail: 'images/wikipedia-viewer-thumb.png',
    video: '',
    name: 'Wikipedia Viewer',
    links: [{name: 'Live Site', src: './wiki-viewer/'},
      {name: 'Codepen', src: 'https://codepen.io/iangornall/VXQYQP/'}
    ],
    description: ['A pretty interface for fetching wikipedia data.  Entirely coded by me.'],
    list: [
      'Interfaces with Wikipedia API',
      'Uses Bootstrap with Bootswatch theme for quick styling',
      'Uses jQuery for quick coding'
    ],
    devicons: [
      'html', 'bootstrap', 'jquery'
    ]
  },
  { image: 'images/calculator.png',
    thumbnail: 'images/calculator-thumb.png',
    video: '',
    name: 'Calculator',
    links: [
      {name: 'Live Site', src: './calculator/'}
    ],
    description: ['A basic calculator web app.  Built by me.  Features:'],
    list: ['Styled to look like an actual calculator with push buttons', 'Functional operations, clear buttons', 'Built to specifications on freeCodeCamp.'],
    devicons: [
      'html', 'css', 'javascript', 'jquery'
    ]
  }
];