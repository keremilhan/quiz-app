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
      text: 'How is the Netherland national football team called?',
      answers: {
        a: 'Oranje',
        b: 'Blues',
        c: 'Lions',
        d: 'Heros',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What is the highest poin of Africa?',
      answers: {
        A: 'Mount Kenya',
        B: 'Mount Klimanjaro',
        C: 'Mount Everest',
        D: 'Mount Blanc'
        
      },
      correct: 'B',
      selected: null,
    },

    {
      text: 'Which country is the largest producer of coffee beans in the world?',
      answers: {
         A: 'Colombia',
         B: 'Kenya',
         C: 'Brazil',
         D: 'Netherland'
      },
      correct: 'C',
      selected: null,
    },
    {                       
      text: 'What is the main cause of wind?',
      answers: {
        A: ' Earth rotation',
        B: 'Ocean currents',
        C: 'Temperature differences',
        D: 'Earth magnetic field',
      },
      correct: 'C',
      selected: null,
    },

    {
      text: 'Who is credited with the discovery of the element Oxygen?',
      answers: {
        A: 'Marie Curie',
        B: 'Albert Einstein',
        C: 'Joseph Priestley',
        D: 'Dmitri Mendeleev',
      },
      correct: 'C',
      selected: null,
    },
    {                     
      text: 'What is the highest point in the Netherlands?',
      answers: {              
        A: 'Vaalserberg',
        B: 'Utrechtse Heuvelrug',
        C: 'Veluwe',
        D: 'Sallandse Heuvelrug',
      },
      correct: 'A',
      selected: null,
    },

    {
      text: 'What is “Stroopwafel” one of the most famous Dutch foods?',
      answers: {
        A: 'A type of cheese',
        B: 'A chocolate biscuit',
        C: 'Thin waffle with caramel',
        D: 'A sweet pie',
      },
      correct: 'C',
      selected: null,
    },
    {      
      text: "Who is known as the 'King of Pop'?",  
      answers: {                                     
        A: "Elvis Presley",
        B: "Michael Jackson",
        C: "Prince",
        D: "Madonna",
      },
      correct: 'B',
      selected: null,
    },

    {
      text: "Which classical composer became deaf later in life?",
      answers: {
        A: "Wolfgang Amadeus Mozart",
        B: "Johann Sebastian Bach",
        C: "Ludwig van Beethoven",
        D: "Franz Schubert",
      },
      correct: 'C',
      selected: null,
    },
    {
      text: "What is the term used to describe the quality of a musical tone that distinguishes it from others of the same pitch and volume?",
      answers: {
        A: 'Timbre',
        B: 'Rhythm',
        C: 'Melody',
        D: 'Harmony',
      },
      correct: 'A',
      selected: null,
    },

  ],
};
