# Trello Clone

## Selector

```ts
import { atom, selector } from 'recoil';

export const minuteState = atom({
  key: 'minutes',
  default: 0,
});

export const hourSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
```

## 칸반(Kanban)

칠판에 진행상태나 사람, 업무 종류 등에 따라 칸을 나누고 각 칸에 이슈 내용이 적힌 포스트잇을 붙여 현재 업무 현황을 한눈에 파악하는 시스템이다.

### Drag and Drop

- [react-beautiful-dnd](https://npmjs.com/package/react-beautiful-dnd)

```bash
$ npm i react-beautiful-dnd

# typescript 사용 시 추가 설치
$ npm i --save-dev @types/react-beautiful-dnd
```

드래그, 드롭, 애니메이션을 적용할 수 있다.

draggableProps 는 어디에서든 Drag 할 수 있다.
dragHandleProps 는 정해진 위치에서만 Drag 할 수 있도록 한다.

## memo

불필요한 재렌더링이 너무 많아 최적화가 필요할 경우 사용한다.
