const { STORY_POST_SUCCESS, storyPostSuccess, signUp } = require("./actions");

describe("#storyPostSuccess", () => {
  describe("returns an object with type and payload", () => {
    test("should return an action object", () => {
      // test data simulating homepages
      const story = [{ id: 2, title: "blabla" }];
      // build action we expect to get back
      const expected = {
        type: STORY_POST_SUCCESS,
        payload: story,
      };
      // call function
      const action = storyPostSuccess(story);
      // do assertion on function return
      expect(action).toEqual(expected);
    });
  });
});

jest.mock("axios");

// describe("signUp actions", () => {
//   describe("#signUp", () => {
//     describe("when this function is called", () => {
//       test("it should dispatch apploading, send a post request to the server \
//       with the user data, dispatch a loginSuccess, dispatch a message with timeout  \
//       and dispatch appDoneLoading", async () => {
//         const dispatch = jest.fn();
//         const appLoading = jest.fn();
//         const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
//         // const response = {
//         //   data: { spaces: { rows: [{ name: "matias" }] } },
//         // };

//         // axios.get.mockImplementation(() => Promise.resolve(response));

//         const thunk = signUp();
//         await thunk(dispatch, getState);
//         expect(dispatch).toHaveBeenCalledWith(appLoading());
//       });
//     });
//   });
// });
