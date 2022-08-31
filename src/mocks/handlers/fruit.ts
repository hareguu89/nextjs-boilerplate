import { rest } from "msw";

// [Get] fruits 서버 요청 시 [ '사과', '바나나' ]를 응답한다.
export const getFruits = rest.get(
  "http://localhost:3000/fruit",
  (req, res, ctx) => res(ctx.json(["사과", "바나나"])),
);
