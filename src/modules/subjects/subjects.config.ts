export const subjectsConfig = [
  {
    key: 'ukrainian_language',
    label: 'Українська мова',
    difficulty: 7,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'physical_education',
    label: 'Фізична культура',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
    forbiddenSameDaySubjectKeys: ['labor_training', 'art', 'music'],
  },
  {
    key: 'labor_training',
    label: 'Трудове навчання',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
    forbiddenSameDaySubjectKeys: ['physical_education', 'art', 'music'],
  },
  {
    key: 'art',
    label: 'Образотворче Мистецтво',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
    forbiddenSameDaySubjectKeys: [
      'physical_education',
      'labor_training',
      'music',
    ],
  },
  {
    key: 'music',
    label: 'Музичне Мистецтво',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
    forbiddenSameDaySubjectKeys: [
      'physical_education',
      'labor_training',
      'art',
    ],
  },
  {
    key: 'ukrainian_literature',
    label: 'Українська література',
    difficulty: 7,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'english_language',
    label: 'Англійська мова',
    difficulty: 10,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'foreign_literature',
    label: 'Зарубіжна література',
    difficulty: 7,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'history_intro',
    label: 'Історія (Вступ до історії)',
    difficulty: 8,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'mathematics',
    label: 'Математика',
    difficulty: 11,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'natural_science',
    label: 'Природознавство',
    difficulty: 6,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'informatics',
    label: 'Інформатика',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'health_basics',
    label: 'Основи здоров’я',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'history_ukraine_world',
    label: 'Історія України та Всесвітня історія (інтегрований курс)',
    difficulty: 8,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'biology',
    label: 'Біологія',
    difficulty: 6,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'geography',
    label: 'Географія',
    difficulty: 6,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'ukraine_history',
    label: 'Історія України',
    difficulty: 8,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'world_history',
    label: 'Всесвітня історія',
    difficulty: 8,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'algebra',
    label: 'Алгебра',
    difficulty: 11,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'geometry',
    label: 'Геометрія',
    difficulty: 11,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'physics',
    label: 'Фізика',
    difficulty: 9,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'chemistry',
    label: 'Хімія',
    difficulty: 9,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'civic_education',
    label: 'Громадянська освіта',
    difficulty: 8,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'biology_ecology',
    label: 'Біологія і екологія',
    difficulty: 6,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'ukraine_defense',
    label: 'Захист України',
    difficulty: 8,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'physics_astronomy',
    label: 'Фізика і астрономія',
    difficulty: 9,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'technology',
    label: 'Технології',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
  },
  {
    key: 'financial_literacy',
    label: 'Фінансова грамотність',
    difficulty: 0,
    groupNumber: 1,
    hours: 3,
  },
];

export const defaultGradesSubjectsMap = {
  5: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'history_intro',
    'mathematics',
    'natural_science',
    'informatics',
    'health_basics',
  ],
  6: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'history_ukraine_world',
    'mathematics',
    'biology',
    'geography',
    'informatics',
    'health_basics',
  ],
  7: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'ukraine_history',
    'world_history',
    'algebra',
    'geometry',
    'biology',
    'geography',
    'physics',
    'chemistry',
    'informatics',
  ],
  8: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'ukraine_history',
    'world_history',
    'algebra',
    'geometry',
    'biology',
    'geography',
    'physics',
    'chemistry',
    'informatics',
  ],
  9: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'ukraine_history',
    'world_history',
    'algebra',
    'geometry',
    'biology',
    'geography',
    'physics',
    'chemistry',
    'informatics',
  ],
  10: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'ukraine_history',
    'world_history',
    'civic_education',
    'mathematics',
    'biology_ecology',
    'geography',
    'physics',
    'chemistry',
    'ukraine_defense',
  ],
  11: [
    'ukrainian_language',
    'ukrainian_literature',
    'english_language',
    'foreign_literature',
    'ukraine_history',
    'world_history',
    'mathematics',
    'biology_ecology',
    'geography',
    'physics_astronomy',
    'chemistry',
    'ukraine_defense',
  ],
};
