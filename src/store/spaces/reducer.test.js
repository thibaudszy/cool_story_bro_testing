import reducer from "./reducer";
import { FETCH_SPACES_SUCCESS } from "./actions";

// describe("#spaceReducer", () => {
//   describe("FETCH_SPACES_SUCCESS", () => {
//     describe("if given an empty state and a FETCH_SPACES_SUCCESS with a an array as payload", () => {
//       test("should return an updated array of spaces", () => {
//         const spaces = [{ name: "matias" }, { name: "rein" }];
//         const action = { type: FETCH_SPACES_SUCCESS, payload: spaces };
//         const result = reducer([], action);
//         expect(result).toEqual([...spaces]);
//       });
//     });
//     describe("if given a state with spaces and a FETCH_SPACES_SUCCESS with a an array as payload", () => {
//       test("should return an both the spaces in the state and the new ones", () => {
//         const spaces = [{ name: "matias" }, { name: "rein" }];
//         const state = [{ name: "bart" }, { name: "renee" }];
//         const action = { type: FETCH_SPACES_SUCCESS, payload: spaces };
//         const result = reducer(state, action);
//         expect(result).toEqual([...state, ...spaces]);
//       });
//     });
//   });
// });

describe("homepageReducer", () => {
  const initialState = [];

  describe("if given state === undefined and an action with unknown action type", () => {
    test("should return the initalState", () => {
      const spaces = undefined;
      const action = { type: "UNKNOWN", payload: spaces };
      const result = reducer([], action);
      expect(result).toEqual([]);
    });
  });

  describe("when given a FETCH_SPACES_SUCCESS action type", () => {
    test("should return an updated state", () => {
      const spaces = [{ name: "matias" }, { name: "rein" }];
      const state = [{ name: "bart" }, { name: "renee" }];
      const action = { type: FETCH_SPACES_SUCCESS, payload: spaces };
      const result = reducer(state, action);
      expect(result).toEqual([
        { name: "bart" },
        { name: "renee" },
        { name: "matias" },
        { name: "rein" },
      ]);
    });
  });
});
