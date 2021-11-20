import { range } from "./range";
import { clone } from "./clone";
import { NX, NY } from "./constant";

export function iteration(u: number[][]) {
  /*
    Calculate u_ij with Finite Difference Methods (FDM)
    Boundary Condition: D = [0, 1] * [0, 1] (100 * 100 mesh)
     */
  const u_next = clone(range({ stop: NX }), NY); // Initialize

  const loopObj = { start: 1, stop: NX - 1 } as const;

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
}
