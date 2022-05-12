import { IPostData } from "../../services";
import { PostsActionTypes } from "../actions";

const initialState: IInitiateState = {
  allPosts: [],
  postDetail: [],
};

interface IArgs {
  type: string;
  payload?: any;
}

interface IInitiateState {
  allPosts: IPostData[];
  postDetail: IPostData[];
}

const reducer = (state = initialState, { type, payload }: IArgs) => {
  switch (type) {
    case PostsActionTypes.ADD_POST_LIST: {
      return {
        ...state,
        allPosts: payload,
      };
    }
    case PostsActionTypes.ADD_POST_DETAIL: {
      return {
        ...state,
        postDetail: [...state.postDetail, payload],
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as postsReducer };
