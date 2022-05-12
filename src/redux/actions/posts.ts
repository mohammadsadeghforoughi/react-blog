import { action } from "typesafe-actions";

export const PostsActionTypes = {
  ADD_POST_LIST: "@@posts/addPostList",
  ADD_POST_DETAIL: "@@posts/addPostDetail",
};

export const addPostList = (data: any) =>
  action(PostsActionTypes.ADD_POST_LIST, data);
export const addPostDetail = (data: any) =>
  action(PostsActionTypes.ADD_POST_DETAIL, data);
