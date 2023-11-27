export type Card = {
  id: string;
  appName: string;
  appDescription: string;
  appImage: string;
};

export const cards = [
  {
    id: '1',
    appName: 'Wonderful App 1',
    appDescription: 'This is a wonderful app',
    appImage: 'https://via.placeholder.com/1200x720',
  },
  {
    id: '2',
    appName: 'Wonderful App 2',
    appDescription: 'This is a wonderful app',
    appImage: 'https://via.placeholder.com/1200x720',
  },
  {
    id: '3',
    appName: 'Wonderful App 3',
    appDescription: 'This is a wonderful app',
    appImage: 'https://via.placeholder.com/1200x720',
  },
  {
    id: '4',
    appName: 'Wonderful App 4',
    appDescription: 'This is a wonderful app',
    appImage: 'https://via.placeholder.com/1200x720',
  },
  {
    id: '5',
    appName: 'Wonderful App 5',
    appDescription: 'This is a wonderful app',
    appImage: 'https://via.placeholder.com/1200x720',
  },
];

export const getSingleCard = (id: string) => {
  return cards.find((card) => card.id === id);
};
