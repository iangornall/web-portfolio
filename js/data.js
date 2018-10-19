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
  },
  aws: {
    icon: 'devicon-amazonwebservices-original',
    text: 'Amazon Web Services'
  },
  express: {
    icon: 'devicon-express-original',
    text: 'Express'
  },
  nodejs: {
    icon: 'devicon-nodejs-plain',
    text: 'Node.js'
  },
  postgresql: {
    icon: 'devicon-postgresql-plain',
    text: 'PostgreSQL'
  },
  react: {
    icon: 'devicon-react-original',
    text: 'React.js'
  },
}

var projectData = [
  { image: 'images/diyhub.png',
    thumbnail: 'images/diyhub-thumb.png',
    video: 'https://www.youtube.com/embed/mHAlgJ0qLPQ?rel=0',
    name: 'DIYHub',
    links: [
      {name: 'Live Site', src: 'http://www.diyhub.fun'},
      {name: 'Github', src: 'https://github.com/marberrym/DIYHub'}
    ],
    description: ['Collaboration built with React / Redux / Express / PostgreSQl.', 'Personal Responsibilities:'],
    list: ['Implemented material search using Amazon Product Advertising API', 'Handled image previews with state and lifecycle methods in React', 'Used Redux to handle global state, i.e. user status', 'Created custom middleware for image resizing with Sharp from image uploads handled by Multer', 'Made dynamic queries for data across join tables'],
    devicons: [
      'react', 'nodejs', 'express', 'postgresql', 'git'
    ]
  },
  { image: 'images/color-addiction.png',
    thumbnail: 'images/color-addiction-thumb.png',
    video: '',
    name: 'Color Addiction',
    links: [
      {name: 'Live Site', src: 'http://coloraddiction.iangornall.com'},
      {name: 'Github', src: 'https://github.com/iangornall/color-addiction'}
    ],
    description: ['Collaboration built on Express and PostgreSQL.', 'Personal Responsibilities:'],
    list: ['Created routes and queries to for handling scores in database', 'Implemented interact.js drag and drop and color mixing libraries', 'Set up scoring system with timers'],
    devicons: [
      'nodejs', 'express', 'postgresql', 'git'
    ]
  },
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