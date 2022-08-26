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

## reference

react 코드를 이용해 HTML 요소를 지정하고 가져올 수 있는 방법
다시 말해서 자바스크립트로부터 HTML 요소를 가져오고 수정하는 방법
react JS component를 통해서 HTML 요소를 가져올 수 있도록 한다.
reference랑 우리가 HTML 요소를 가져와서 그걸 변경 할 수 있도록 해준다.

useRef()
useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 life cycle을 통해 유지될 것입니다.
일반적인 사용 사례는 자식에게 접근하는 경우입니다.
본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 "상자"와 같습니다.
