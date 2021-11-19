/*
-*- coding: UTF-8 -*-
Solution of the 2-D Laplace equation
Reference: https://www.ohmsha.co.jp/book/9784274221705/
*/

import { arange } from "numjs";
import { range } from "./utils/range";
import { clone } from "./utils/clone";

function iteration(u: number[][]) {
  /*
    Calculate u_ij with Finite Difference Methods (FDM)
    Boundary Condition: D = [0, 1] * [0, 1] (100 * 100 mesh)
     */
  const u_next = clone(range({ stop: NX }), NY); // Initialize

  const loopObj = { start: 1, stop: NX - 1 };

  for (let i of range(loopObj)) {
    for (let j of range(loopObj)) {
      u_next[i][j] = (u[i][j - 1] + u[i - 1][j] + u[i + 1][j] + u[i][j + 1]) / 4;
    }
  }
  // Update u_ij
  for (let i of range(loopObj)) {
    for (let j of range(loopObj)) {
      u[i][j] = u_next[i][j];
    }
  }

  // End of the function iteration()
}
