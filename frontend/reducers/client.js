const initialState = {
  clients: [],
  client: {
    clientId: null,
    companyNumber: null,
    companyType: null,
    address: null,
    contactPerson: null,
    email: null,
    name: null,
    telephone: null,
    web: null,
  },
  isFetching: false,
  modalIsOpen: false,
};
// 一

// 複数のCLIENTを処理するための関数
const clientApp = (state = initialState, action) => {
  console.log("reducere clients action");
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "FETCH_CLIENTS":
      return {
        ...state,
        isFetching: true,
      };
    case "RECEIVE_CLIENTS":
      return { ...state, clients: action.clients, isFetching: false };
    case "ADD_CLIENT":
      return {
        clients: [action.payload.client, ...state.clients],
        isFetching: false,
        client: action.payload.client,
        modalIsOpen: false,
      };
    case "UPDATE_CLIENT":
      return {
        clients: state.clients.map((client) => {
          if (client.clientId === action.payload.client.clientId) {
            return action.payload.client;
          }
          return client;
        }),
        client: action.payload.client,
        modalIsOpen: false,
        isFetching: false,
      };
    case "DELETE_CLIENT":
      return {
        clients: state.clients.filter(
          (client) => client.clientId !== action.payload.clientId,
        ),
        client: {
          clientId: null,
          companyNumber: null,
          companyType: null,
          address: null,
          contactPerson: null,
          email: null,
          name: null,
          telephone: null,
          web: null,
        },
        modalIsOpen: false,
        isFetching: false,
      };
    case "RECEIVE_CLIENT":
      return {
        ...state,
        client: action.client[0],
        modalIsOpen: true,
        isFetching: false,
      };
    case "NEW_CLIENT":
      return {
        ...state,
        client: {
          clientId: null,
          companyNumber: null,
          companyType: null,
          address: null,
          contactPerson: null,
          email: null,
          name: null,
          telephone: null,
          web: null,
        },
        modalIsOpen: true,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        modalIsOpen: false,
      };
    default:
      return state;
  }
};

export default clientApp;
