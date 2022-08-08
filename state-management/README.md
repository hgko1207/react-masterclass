## Recoil

- React JS에서 사용할 수 있는 state management library
- 페이스북이 만들었음

- https://recoiljs.org/ko/

```bash
$ npm install recoil
# or
$ yarn add recoil
```

`RecoilRoot` 로 감싸준다.

```ts
// index.ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## atoms

atoms.ts 파일을 생성하고 Recoil의 atom function을 사용하여 필요한 데이터를 설정한다.
atom은 두 가지를 요구하는데 첫 번째는 key로 유일한 이름이어야 함
두 번째는 default 값이다.

```ts
// atoms.ts
import { atom } from 'recoil';

export const IsDarkAtom = atom({
  key: 'isDark',
  default: false,
});
```

컴포넌트가 atom을 읽게 하기 위해서는 useRecoilValue()를 아래와 같이 사용하면 된다.

```ts
import { useRecoilValue } from 'recoil';
import { IsDarkAtom } from './atoms';

const isDark = useRecoilValue(IsDarkAtom);
```

컴포넌트가 atom을 쓰게 하기 위해서는 useSetRecoilState()를 아래와 같이 사용하면 된다.
atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 사용하면 된다.

```ts
const setDarkAtom = useSetRecoilState(IsDarkAtom);
const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

<Header>
  <Title>코인</Title>
  <button onClick={toggleDarkAtom}>Toggle Mode</button>
</Header>;
```

## React Hook Form

기본적으로 Form을 사용할 때 작성하는 코드들이다. 아래 코드는 하나의 input 이지만 여러개의 input 을 사용할 경우 useState와 onChange 이벤트가 많이 생성될 것 이다. 그리고 validation 체크하는 코드도 복잡해진다.

```ts
// TodoList.tsx
import React, { useState } from 'react';

function ToDoList() {
  const [toDo, setTodo] = useState('');
  const [toDoError, setTodoError] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError('');
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setTodoError('To do should be longer');
    }
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
}

export default ToDoList;
```

react-hook-form 라이브러리를 사용하면 위의 코드들을 한줄로 줄일 수 있다.
Validation(검증)도 해준다.

```bash
$ npm install react-hook-form
```

`useForm`을 import 한다.
`register` 함수를 사용하면 `onchange` 이벤트 핸들러와 props들, `useState`가 필요없다.
`useForm`을 사용한 단 한줄의 코드가 onChange 이벤트와 value, useState를 모두 대체했다.
`watch` 함수는 form의 입력값들의 변화를 관찰 할 수 있게 해준다.

`register` 함수를 사용하는 것만으로도 onChange 이벤트 함수를 만들고, input에 props를 줄 수 있다.

`{...register(name)}` 을 input 태크 안에 작성한다. name은 key 값이다.

```ts
// TodoList.tsx
import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, watch } = useForm();

  return (
    <div>
      <form>
        <input {...register('toDo')} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
```
