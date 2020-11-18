import axios from "axios";
import {
  fetchSpaces,
  fetchSpacesSuccess,
  FETCH_SPACES_SUCCESS,
} from "./actions";

jest.mock("axios");

describe("space actions", () => {
  describe("#fetchSpaces", () => {
    describe("when this function is called", () => {
      test("it should fetch the data and dispatch a fetchSpacesSuccess action", async () => {
        const dispatch = jest.fn();
        const getState = jest.fn().mockReturnValue({ spaces: [] });
        const response = {
          data: { spaces: { rows: [{ name: "matias" }] } },
        };

        axios.get.mockImplementation(() => Promise.resolve(response));

        const thunk = fetchSpaces();
        await thunk(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(
          fetchSpacesSuccess(response.data.spaces.rows)
        );
      });
    });
  });
});

describe("#fetchSpacesSuccess", () => {
  describe("if given an array of spaces", () => {
    test("should return an action object", () => {
      // test data simulating homepages
      const spaces = [{}, {}];
      // build action we expect to get back
      const expected = {
        type: FETCH_SPACES_SUCCESS,
        payload: spaces,
      };
      // call function
      const action = fetchSpacesSuccess(spaces);
      // do assertion on function return
      expect(action).toEqual(expected);
    });
  });
});
