const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 777, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
