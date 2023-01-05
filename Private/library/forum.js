import { forum_boards } from "./forum/get-forum-boards.js";
import { forum_topic_detail } from "./forum/get-forum-topic-detail.js";
import { forum_topics } from "./forum/get-forum-topics.js";

const API = {
  url: "https://api.spoiledpotatoes.net/v2/forum/",
};

export const forum = (config = {}) => {
  if (config.client_id == undefined) {
    throw new ReferenceError("Missing SP require: client_id");
  }
  config.url = API.url;
  return {
    forum_boards: forum_boards(config),
    forum_topic_detail: forum_topic_detail(config),
    forum_topics: forum_topics(config),
  };
};