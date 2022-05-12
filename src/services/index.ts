import axios from "axios";
import moment from "moment";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

const _FetchPostList = async (): Promise<IPostData[]> => {
  let posts = await instance.get("/posts");
  let res: IPostData[] = [];
  for (let post of posts.data) {
    res.push({
      title: post.title,
      date: moment().subtract(post.id, "days").format("MMMM DD, YYYY"),
      text: post.body,
      minsRead: Math.round(Math.floor(Math.random() * (30 - 1 + 1) + 1) / 5),
    });
  }
  return res;
};

const _FetchPostDetails = async (postId: string): Promise<IPostData> => {
  let post = await instance.get(`/posts/${postId}`);
  return {
    title: post.data.title,
    date: moment().subtract(post.data, "days").format("MMMM DD, YYYY"),
    text: post.data,
    minsRead: Math.round(Math.floor(Math.random() * (30 - 1 + 1) + 1) / 5),
  };
};

export { _FetchPostList, _FetchPostDetails };

interface IPostData {
  date: string;
  minsRead: number;
  text: string;
  title: string;
}
