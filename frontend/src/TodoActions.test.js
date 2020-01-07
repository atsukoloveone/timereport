import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "../actions/index";
import * as actionTypes from "../actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore(); // fetchMockのリセット
  });

  it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
    // fetchのmock化、一度だけ。
    fetchMock.getOnce("http://127.0.0.1:4000/todos", {
      body: [
        {
          id: 1,
          text: "first",
          completed: 0,
        },
        {
          id: 2,
          text: "second",
          completed: 0,
        },
      ],
      headers: { "content-type": "application/json" },
    });

    // Async Action の中で実行されると期待されるAction配列
    const expectedActions = [
      { type: actionTypes.FETCH_TODOS },
      {
        type: actionTypes.RECEIVE_TODOS,
        todos: [
          {
            id: 1,
            text: "first",
            completed: 0,
          },
          {
            id: 2,
            text: "second",
            completed: 0,
          },
        ],
      },
    ];

    const store = mockStore({ todos: [] });

    // Return the promise

    return store.dispatch(actions.getTodos()).then(() => {
      console.log(JSON.stringify(store.getActions()));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
