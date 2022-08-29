# NOMFLIX CLONE

## 설치

```bash
# 프로젝트 생성
npx create-react-app nomflix-clone --template typescript
```

```bash
# 재설치할 패키지들
$ npm i recoil styled-components @types/styled-components react-router-dom@5.3 framer-motion react-query react-hook-form -S

or

$ npm i recoil styled-components @types/styled-components react-router-dom framer-motion react-query react-hook-form -S
```

## 테마

```ts
// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
```

```ts
// theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  red: '#E51013',
  black: {
    veryDark: '#141414',
    darker: '#181818',
    lighter: '#2F2F2F',
  },
  white: {
    lighter: '#fff',
    darker: '#e5e5e5',
  },
};
```
