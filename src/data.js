/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Who painted the Mona Lisa?',
      answers: {
        a: 'Vincent van Gogh',
        b: 'Leonardo da Vinci',
        c: 'Pablo Picasso',
        d: 'Michelangelo',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Louvre',
          href: 'https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana',
        },
        {
          text: 'Louvre',
          href:
            'https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana',
        },
      ],
    },
    {
      text: 'What is the currency of Japan?',
      answers: {
        a: 'Won',
        b: 'Yen',
        c: 'Euro',
        d: 'Dollar',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/Japanese_yen',
        },
        {
          text: 'Wikipedia',
          href:
            'https://en.wikipedia.org/wiki/Japanese_yen',
        },
      ],
    },
    {
      text: 'What is the largest planet in our solar system?',
      answers: {
        a: 'Earth',
        b: 'Jupiter',
        c: 'Mars',
        d: 'Venus',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Learn More',
          href: 'https://science.nasa.gov/jupiter/',
        },
        {
          text: 'Learn More',
          href:
            'https://science.nasa.gov/jupiter/',
        },
      ],
    },
    {
      text: 'Who wrote the play "Romeo and Juliet"?',
      answers: {
        a: 'William Shakespeare',
        b: 'Jane Austen',
        c: 'Charles Dickens',
        d: 'Mark Twin',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Learn More',
          href: 'https://en.wikipedia.org/wiki/William_Shakespeare',
        },
        {
          text: 'Learn More',
          href:
            'https://en.wikipedia.org/wiki/William_Shakespeare',
        },
      ],
    },
    {
      text: 'In which year did the Titanic sink?',
      answers: {
        a: '1905',
        b: '1912',
        c: '1920',
        d: '1931',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Learn More',
          href: 'https://en.wikipedia.org/wiki/Titanic',
        },
        {
          text: 'Learn More',
          href:
            'https://en.wikipedia.org/wiki/Titanic',
        },
      ],
    },
    {
      text: 'What is the main ingredient in guacamole?',
      answers: {
        a: 'Tomatoes',
        b: 'Avocado',
        c: 'Onions',
        d: 'Cheese',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Learn More',
          href: 'https://www.allrecipes.com/recipe/14231/guacamole/',
        },
        {
          text: 'Learn More',
          href:
            'https://www.allrecipes.com/recipe/14231/guacamole/',
        },
      ],
    },
    {
      text: 'Which scientist developed the theory of general relativity?',
      answers: {
        a: 'Isaac Newton',
        b: 'Marie Curie',
        c: 'Galileo Galilei',
        d: 'Albert Einstein',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Learn More',
          href: 'https://www.nobelprize.org/prizes/physics/1921/einstein/facts/',
        },
        {
          text: 'Learn More',
          href:
            'https://www.nobelprize.org/prizes/physics/1921/einstein/facts/',
        },
      ],
    },
    {
      text: 'What is the largest mammal on Earth?',
      answers: {
        a: 'African Elephant',
        b: 'Giraffe',
        c: 'Blue Whale',
        d: 'Polar Bear',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Learn More',
          href: 'https://ocean.si.edu/ocean-life/marine-mammals/blue-whale',
        },
        {
          text: 'Learn More',
          href:
            'https://ocean.si.edu/ocean-life/marine-mammals/blue-whale',
        },
      ],
    },
    // Add more questions here
  ],
};
