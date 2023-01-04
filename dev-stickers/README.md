<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal TypeScript starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

## Gastby

Gastby는 리액트 기반의 프레임워크. 무슨 말이냐면 Gastby는 리액트를 이용하면서도 Gastby는 리액트에 아주 약간의 복잡함을 더해주고 있다.
리액트에 새로운 규칙 몇 가지를 추가해준다.

먼저는 프레임워크를 이해해야 함.
프로그래밍의 세계에서 라이브러리와 프레임워크 라는 단어를 많이 들어 봤을텐데 라이브러리는 우리 개발자들이 "불러오는" 어떤 대상이다.
라이브러리를 임포트(import)하기도 하고, 필요로 할때 쓰게 된다.
라이브러리는 '불러오기'될 대상이다. 어떤 파일에서든 임포트해서 사용하는 것이다.
그걸 함수 안에서 컴포넌트 안에서 임포트해서 사용하기도 한다. 어디서인지는 상관 없다.

프레임워크는 다르다. 프레임워크를 임포트하지도 불러오지도 않는다. 대신에 프레임워크 속에다 코드를 집어넣으면 프레임워크가 그 코드를 불러다 준다.

다시 말해 라이브러리는 임포트하고 사용하는 대상이다. 예컨대 styled component를 불러올 수 있다. 어느 파일 안에서든지 그걸 명시적으로 임포트해서 사용할 수가 있다.

개츠비 같은 프레임워크를 임포트하는 일은 없다. 작성한 코드를 맞는 파일에 배치할 거고 개츠비가 그 코드를 소환해 준다. 특정 룰에 맞게 코드를 작성할 거고 개츠비가 켜지면 코드안에 들어가서
그 코드를 불러올 거고 개츠비의 룰만 따르면 즉 적합한 디렉토리 속에 맞는 파일을 파일명까지 맞게 생성하면 개츠비가 코드를 불러와서 우리를 도와주는 프레임워크가 작동한다.

### 설치

```sh
npm i -g gatsby-cli
```

Gatsby requires Node.js 18.0.0 or higher (you have v14.17.5).
Upgrade Node to the latest stable release: https://gatsby.dev/upgrading-node-js

개츠비를 사용하려면 Node.js 18 이상 버전이 필요합니다.

### 프로젝트 생성

```sh
gatsby new
```

- 프로젝트 명을 입력한다.
- 폴더를 확인한다.
- JavaScript 쓸 건지 TypeScript 쓸 건지 선택한다.
- 사용할 CMS를 선택한다. 사용하지 않을 경우 No를 선택한다.
- 사용할 styling system(Sass, Emotion, styled-components 등..)을 선택한다.
- 구글 애널리틱스, 반응형 이미지나 사이트맵 등을 추가할 것인지 묻는다. 없다면 Done을 선택한다.

### Routing

리액트 라우터를 사용하여 페이지를 생성하는 것과 달리 Gatsby는 src/pages 안에 각 .tsx 파일에 대한 페이지를 생성합니다.
예를 들어 `src/pages/contact.tsx`는 yoursite.com/contact 페이지를 생성하고 `src/pages/home.tsx`는 yoursite.com/home 페이지를 생성합니다.

Gatsby로 Routing하는 것은 간단하고 리액트 라우터도 스크린도 만들 필요 없고 그 경로롸 요소들을 일일히 설명할 필요도 없다는 장점이 있습니다.

```tsx
// src/pages/index.tsx
import React from 'react';

export default function Index() {
  return <div>Hello world</div>;
}
```

- https://www.gatsbyjs.com/docs/reference/routing/creating-routes/

### Layout Components

Gatsby는 기본적으로 레이아웃을 페이지에 자동으로 적용하지 않습니다.
대신 Layout Component를 사용하면 전체 Header 및 Footer, 그리고 일부 페이지에서는 사이드바를 사용하거나 레이아웃과 페이지 컴포넌트 간에 데이터를 전달할 수 있습니다.
Layout Component를 사용하여 여러 페이지에서 Header를 공유하도록 구성할 수 있습니다.

`src/components/` 디렉토리를 생성하고 `Layout.tsx` 파일을 생성합니다.
아래와 같이 페이지를 이동하는 Layout Component를 구성합니다.

```tsx
import { Link } from 'gatsby';
import React from 'react';

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
```

페이지에 Layout Component를 적용하려면 `Layout` 를 포함하고 그 안에 페이지 내용을 넣어야 합니다.
예를 들어 레이아웃 첫 페이지에 적용하는 방법은 다음과 같습니다.

```tsx
import * as React from 'react';
import Layout from '../components/Layout';

export default Home = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to Home</h1>
      </div>
    </Layout>
  );
};
```

이 레이아웃이 필요한 모든 페이지와 템플릿에 대해 반복을 합니다.

- https://www.gatsbyjs.com/docs/how-to/routing/layout-components/

### Gatsby Head API

Gatsby에는 페이지의 문서 헤드에 요소를 추가할 수 있는 내장 head가 포함되어 있습니다.
react-helmet 또는 기타 유사한 솔루션과 비교할 때 Gatsby Head는 사용하기 쉽고 성능이 우수하며 번들 크기가 더 작고 최신 React 기능을 지원합니다.

```tsx
// ex)
export const Head = () => <title>Home Page</title>;
```

- https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/

### GraphQL

GraphQL은 쿼리 언어이고, 쿼리란 무언가 해달라고 부탁한다는 뜻입니다.

### useStaticQuery (정적 쿼리 사용)

useStaticQuery는 빌드 시 리액트 훅을 사용하여 Gatsby의 GraphQL 데이터 계층을 쿼리하는 기능을 제공합니다. 이를 통해 React 컴포넌트는 구문 분석, 평가 및 컴포넌트에 삽입될 GraphQL 쿼리를 통해 데이터를 검색할 수 있습니다.
useStaticQuery 훅은 모든 컴포넌트 또는 페이지에서 사용할 수 있습니다.

```tsx
const data = useStaticQuery(graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
```

https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
https://www.gatsbyjs.com/docs/reference/graphql-data-layer/graphql-api/#usestaticquery

GraphQL Typegen
https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/
