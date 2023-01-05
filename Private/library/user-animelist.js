import { update_animelist } from "./user_animelist/update-my-animelist-status.js.js";
import { delete_anime_item } from "./user_animelist/delete-my-animelist-item.js.js";
import { get_animelist } from "./user_animelist/get-user-animelist.js.js";

const A = {
  url: "https://api.spoiledpotato.net/v2/anime/",
};

export const user_animelist = (config = {}) => {
  config.url = A.url;
  return {
    update_animelist: update_animelist(config),
    delete_anime_item: delete_anime_item(config),
    get_animelist: get_animelist(config),
  };
};