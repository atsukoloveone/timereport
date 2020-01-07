import * as actionTypes from "../actionTypes";
import * as actions from "../actions/index";

describe("actions", () => {
  it("should create an action to add a activity", () => {
    const text = "Finish docs";
    const id = 1000;
    const expectedAction = {
      type: actionTypes.ADD_TODO,
      id,
      text,
    };
    expect(actions.addTodo(id, text)).toEqual(expectedAction);
  });
});
