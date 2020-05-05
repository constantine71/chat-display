const initialState = {
  messages: [],
  user: {},
};

/**
 *
 */
//actual state of messages should update from local or cloud storage
// for display purposes we use system memory
export default (state = initialState, { type, payload }) => {
  let messages = [...state.messages];
  switch (type) {
    case "ADD_MESSAGE":
      messages.push(payload);
      console.log({ ...state, messages });
      return { ...state, messages };
    case "REMOVE_MESSAGE":
      messages = messages.filter((m) => m.msgId !== payload);
      return { ...state, messages };

    default:
      return state;
  }
};
