주요 개념

- recoil 을 사용하면 atoms (공유상태) 에서 selector(순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들수있다.

Atoms

상태의 단위이며 업데이트, 구독이 가능하다.

```js
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
```

