import { atom, selector } from 'recoil';

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': ['a', 'b', 'c', 'd', 'e', 'f'],
    doing: [],
    done: [],
  },
});
