import esistblog from '../images/projects/esistblog.png';
import fiveStarProspects from '../images/projects/fiveStarProspects.png';
import psych from '../images/projects/psych.png';
import trainmethod from '../images/projects/trainmethod.png';
import newtritious from '../images/projects/newtritious.png';
import whichCat from '../images/projects/whichCat.png';

const projects = [
  {
    link: 'https://github.com/newtritious/Newtritious',
    image: newtritious,
    name: 'newtrious',
    description: 'Newtritious was an app that let you search, save and share recipes. I mentored a team of bootcamp graduates who did most of the coding on this app. I made sure industry best practices were taught and followed. I also gave detailed feedback on their code via code reviews and taught them agile principles with weekly planning meetings and twice weekly standup. Unfortunately, Heroku has retired their free hosting tier that this site used to host, build and deploy, but the code lives on.',
    code: 'https://github.com/newtritious/Newtritious',
    tech: ['React', 'JavaScript', 'Node', 'Express', 'Mongo'],
    id: 0,
  },
  {
    link: 'https://github.com/ichbindev/joglogs/',
    image: trainmethod,
    name: 'trainmethod',
    description:
      "TrainMethod was a webapp that created a custom running schedule to train for your big run, whether it's a casual 5k or a competitive marathon, based on your current activity level and race date. Unfortunately, Heroku has retired their free hosting tier that this site used to host, build and deploy, but the code lives on. The training algorithm has also been nerfed, since one of our collaborators used it to aid his run coaching business and wanted it to remain a trade secret.",
    code: 'https://github.com/ichbindev/joglogs/',
    tech: ['React', 'JavaScript', 'Node', 'Express', 'MySQL'],
    id: 1,
  },
  {
    link: 'https://github.com/ichbindev/whichCat.js/blob/master/README.md',
    image: whichCat,
    name: 'whichCat',
    description:
      'WhichCatIsThat is an iOS app able to correctly identify my cats using a machine learning model I trained. I used Python and TensorFlow to train the original model based on pictures I took of my cats, then created a more accurate model with TeachableMachine. After creating the model, I created a simple browser app that used my webcam to test it live. Finally, I created an iOS app that was able to use the phone\'s camera and the TensorFlow model to correctly identify my cats to shocking accuracy. It was even able to identify a painting of my cat!',
    code: 'https://github.com/ichbindev/whichCat.js',
    tech: [
      'Swift',
      'iOS',
      'TensorFlow Lite',
      'TensorFlow.js',
      'Machine Learning',
      'Image Classification',
    ],
    id: 2,
  },
  {
    link: 'https://ichbindev.github.io/Psych/',
    image: psych,
    name: 'Psych',
    description:
      'Psych is a memory game I made with visuals based on the TV show Psych. The goal is to click all nine characters exactly once. If you get it wrong, you get a sassy quote and must start over.',
    code: 'https://github.com/ichbindev/Psych',
    tech: ['React'],
    id: 3,
  },
  {
    link: 'https://github.com/ichbindev/ichbindev/',
    image: esistblog,
    name: 'ichbindev blog',
    description:
      'Ichbindev blog was a bare-bones blog I made from scratch to play around with Gatsby, Tailwind, and other libraries that caught my interest, like react-dnd. I chronicled my 100 days of code here as well. Though I loved having the ichbin.dev/ domain, it wasn\'t worth the $32/year for a blog that I wasn\'t interested in growing.',
    code: 'https://github.com/ichbindev/ichbindev/',
    tech: ['React', 'JavaScript', 'GraphQL', 'Gatsby', 'Tailwind'],
    id: 4,
  },
  {
    link: 'http://www.fivestarprospects.com/',
    image: fiveStarProspects,
    name: 'FiveStar Prospects',
    description:
      'FiveStar Prospects was a tool officially certified by the NCAA for the 2021-2022 college football season that helped coaches find under-the-radar talent. Players could upload their height, weight, stats and highlight reels to their personal pages that they could share. Coaches could then search the student athlete database based on a variety of filters, including position, stats, measurables, school division and graduation year. This was a contract job and the owner has taken the site down, but I am still proud of the work I did to not only get this project up and running, but to conform to the required privacy and security standards to get this app certified by the NCAA.',
    tech: ['JavaScript', 'jQuery', 'Node', 'Express', 'MySQL'],
    id: 5,
  },
];

export default projects;
