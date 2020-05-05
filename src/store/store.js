import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

//get user who logged in
//here we just assume we have already got the user
const localUser = {
  userId: "user1",
  userInfo: {
    userName: "John Doe",
    userAvatarUrl:
      "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg",
  },
};

const preloadState = { user: localUser, messages: [] };

const store = createStore(rootReducer, preloadState);

export default store;
