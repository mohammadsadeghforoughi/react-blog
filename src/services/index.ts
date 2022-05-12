import axios from "axios";
import moment from "moment";
import { capitalizeFirstLetter } from "../utils/wordCapitlize";
import Store from "../redux/store";
import { addPostDetail, addPostList } from "../redux/actions";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

interface IPostData {
  date: string;
  minsRead: number;
  text: string;
  title: string;
  id: string;
}

const _FetchPostList = async (): Promise<IPostData[]> => {
  let cachedPostList = Store.getState().posts.allPosts;
  if (cachedPostList.length == 0) {
    let posts = await instance.get("/posts");
    let res: IPostData[] = [];
    for (let post of posts.data) {
      res.push({
        title: capitalizeFirstLetter(post.title),
        date: moment().subtract(post.id, "days").format("MMMM DD, YYYY"),
        text: post.body,
        minsRead: Math.round(Math.floor(Math.random() * (30 - 1 + 1) + 1) / 5),
        id: post.id,
      });
    }
    Store.dispatch(addPostList(res));
    return res;
  } else {
    return cachedPostList;
  }
};

const _FetchPostDetails = async (postId: string): Promise<IPostData> => {
  let cachedPostDetail = Store.getState().posts.postDetail.find(
    (post) => post.id == postId
  );
  if (!cachedPostDetail) {
    let post = await instance.get(`/posts/${postId}`);

    let postDetail = {
      title: capitalizeFirstLetter(post.data.title),
      date: moment().subtract(post.data, "days").format("MMMM DD, YYYY"),
      text: post.data.body,
      minsRead: Math.round(Math.floor(Math.random() * (15 - 1 + 1) + 1) / 5),
      id: post.data.id,
    };

    Store.dispatch(addPostDetail(postDetail));

    return postDetail;
  } else {
    return cachedPostDetail;
  }
};

export { _FetchPostList, _FetchPostDetails };
export type { IPostData };
