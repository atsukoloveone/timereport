import reducer from "../reducers/index";
import * as actionTypes from "../actionTypes";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
      visibilityFilter: "SHOW_ALL",
    });
  });

  const expectedReducer1 = {
    todos: [
      {
        id: undefined,
        text: "Run the tests",
        completed: false,
      },
    ],
    visibilityFilter: "SHOW_ALL",
  };

  const expectedReducer2 = {
    todos: [
      {
        id: undefined,
        text: "Run the tests",
        completed: false,
      },
    ],
    visibilityFilter: "SHOW_ALL",
  };

  it("should handle ADD_TODO", () => {
    expect(
      reducer([], {
        type: actionTypes.ADD_TODO,
        text: "Run the tests",
      }),
    ).toEqual(expectedReducer1);

    expect(
      reducer(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: actionTypes.ADD_TODO,
          text: "Run the tests",
        },
      ),
    ).toEqual(expectedReducer2);
  });
});
