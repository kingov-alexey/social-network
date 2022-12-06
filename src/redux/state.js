let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'post 1 test message1', likeCount: 11 },
        { id: 2, message: 'post 2 test message2', likeCount: 22 },
        { id: 3, message: 'post 3 test message3', likeCount: 33 },
      ],
      newPostText: 'it-kamasutra.comsss',
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Имя1',
          ava: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg',
        },
        {
          id: 2,
          name: 'Имя2',
          ava: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
        },
        {
          id: 3,
          name: 'Имя3',
          ava: 'https://abrakadabra.fun/uploads/posts/2022-03/1646103476_1-abrakadabra-fun-p-prozrachnaya-avatarka-1.png',
        },
        {
          id: 4,
          name: 'Имя4',
          ava: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg',
        },
        {
          id: 5,
          name: 'Имя5',
          ava: 'https://i.pinimg.com/736x/bf/88/d4/bf88d49992bf350c81514e0817934475.jpg',
        },
        {
          id: 6,
          name: 'Имя6',
          ava: 'https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg',
        },
        {
          id: 7,
          name: 'Имя7',
          ava: 'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg',
        },
      ],
      messages: [
        { id: 1, message: 'test message1' },
        { id: 2, message: 'test message2' },
        { id: 3, message: 'test message3' },
        { id: 4, message: 'test message4' },
        { id: 5, message: 'test message5' },
        { id: 6, message: 'test message6' },
      ],
    },
    sidebar: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state was changed');
  },
  addPost() {
    let newPost = {
      id: 555,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer // publisher-subscriber // наблюдатель // button.addEventListener // onChange // onClick
  },
};

export default store;
window.store = store;
