import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'rnd':
      return state + action.payload;
    case 'plus':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

document.getElementById('plus').addEventListener('click', () => {
  store.dispatch({ type: 'plus' });
});

document.getElementById('minus').addEventListener('click', () => {
  store.dispatch({ type: 'minus' });
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch({ type: 'rnd', payload });
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};
store.subscribe(update);
