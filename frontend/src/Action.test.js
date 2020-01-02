import * as actions from "../actions/activity";

describe("actions", () => {
  it("should create an action to add a activity", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: "ADD_ACTIVITY",
      text,
    };
    expect(actions.addActivity(text)).toEqual(expectedAction);
  });
});
