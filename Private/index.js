import { anime } from "./library/anime.js";
import { user_animelist } from "./library/user-animelist.js";
import { forum } from "./library/forum.js";
import { manga } from "./library/manga.js";
import { user_mangalist } from "./library/user-mangalist.js";
import { user } from "./library/user.js";

export default () => {
  return {
    anime: anime,
    user_animelist: user_animelist,
    forum: forum,
    manga: manga,
    user_mangalist: user_mangalist,
    user: user,
  };
};