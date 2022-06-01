import esistblog from '../images/projects/esistblog.png';
import fiveStarProspects from '../images/projects/fiveStarProspects.png';
import psych from '../images/projects/psych.png';
import trainmethod from '../images/projects/trainmethod.png';
import newtritious from '../images/projects/newtritious.png';
import whichCat from '../images/projects/whichCat.png';

const projects = [
  {
    link: 'http://www.newtritio.us/',
    image: newtritious,
    name: 'newtrious',
    description: 'Newtritious lets you search, save, and share recipes! I mentored a team of bootcamp graduates who did most of the coding on this app. I made sure industry best practices were taught and followed. I also gave detailed feedback on their code via code reviews.',
    code: 'https://github.com/newtritious/Newtritious',
    tech: ['React', 'JavaScript', 'Node', 'Express', 'Mongo'],
    id: 0,
  },
  {
    link: 'http://joglogs.herokuapp.com/',
    image: trainmethod,
    name: 'trainmethod',
    description:
      "TrainMethod is a webapp that creates a custom running schedule to train for your big run, whether it's a 5k or a marathon.",
    code: 'https://github.com/ichbindev/joglogs/',
    tech: ['React', 'JavaScript', 'Node', 'Express', 'MySQL'],
    id: 0,
  },
  {
    link: 'http://www.fivestarprospects.com/',
    image: fiveStarProspects,
    name: 'FiveStar Prospects',
    description:
      'A NCAA certified tool to help college football coaches find students to recruit. Players can upload their stats and highlight reels and coaches can search for student athletes.',
    code: 'https://github.com/ichbindev/',
    tech: ['JavaScript', 'jQuery', 'Node', 'Express', 'MySQL'],
    id: 2,
  },
  {
    link: 'http://www.ichbin.dev/',
    image: esistblog,
    name: 'ichbindev blog',
    description:
      'Where I write stuff from time to time, also where I chronicled my 100 Days of Code challenge.',
    code: 'https://github.com/ichbindev/ichbindev/',
    tech: ['React', 'JavaScript', 'GraphQL', 'Gatsby', 'Tailwind'],
    id: 1,
  },
  {
    link: 'https://github.com/ichbindev/whichCat.js/blob/master/README.md',
    image: whichCat,
    name: 'whichCat',
    description:
      'A self-study iOS app able to correctly identify my cats using a machine learning model I trained.',
    code: 'https://github.com/ichbindev/whichCat.js',
    tech: [
      'Swift',
      'iOS',
      'TensorFlow Lite',
      'TensorFlow.js',
      'Machine Learning',
      'Image Classification',
    ],
    id: 4,
  },
  {
    link: 'https://ichbindev.github.io/Psych/',
    image: psych,
    name: 'Psych',
    description:
      'A little memory game themed with the TV show Psych. Click all nine characters exactly once, get it wrong and you have to start over.',
    code: 'https://github.com/ichbindev/Psych',
    tech: ['React'],
    id: 3,
  },
];

export default projects;
