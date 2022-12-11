let initialState = {
  friends: [
    {
      id: 11,
      name: 'Имя11',
      ava: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg',
    },
    {
      id: 22,
      name: 'Имя22',
      ava: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
    },
    {
      id: 33,
      name: 'Имя33',
      ava: 'https://abrakadabra.fun/uploads/posts/2022-03/1646103476_1-abrakadabra-fun-p-prozrachnaya-avatarka-1.png',
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
