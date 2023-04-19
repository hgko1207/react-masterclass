# React Js 마스터 클래스

## vscode 단축키 모음

- Ctrl+D: 특정 문자열 여러개 찾기

```text
예시)
string,string,string,number,boolean
쉼표를 선택하고 Ctrl+D를 누른 횟 수 만큼 동일한 문자열이 선택 된다.
```

## install 문제

`npm install` 시 **ERESOLVE unable to resolve dependency tree** 에러가 발생했다. 어떤 모듈을 설치하던 중 `react@"^16.8.5 || ^17.0.0"`에 의존하는 것을 발견했습니다. 현재 react는 `18.2.0` 버전이라 의존성을 해결하지 못했습니다. 해결책은 `npm install` 할 때 `--force` 또는 `--legacy-peer-deps` 와 함께 실행하는 것입니다.

즉, `npm install --legacy-peer-deps` 를 실행하면 위 의존성 문제를 해결할 수 있습니다.

```bash
$ npm install --legacy-peer-deps
```
