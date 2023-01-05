define(['cross-fetch'], (function (fetch) { 'use strict';

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

//the code below prevents the search bar or url bar from being undefined aka gives u an error whe nan id does not exsist
const anime_details = (config) => {
    return () => {
      if (config.anime_id == undefined) {
        throw new ReferenceError("anime_id perameter is needed.");
      }
      const fn = () =>
        fetch__default["default"](`${config.url}/${config.anime_id}?fields=${config.fields}`, {
          method: "GET",
          headers: {
            "X-MAL-CLIENT-ID": config.client_id,
          },
        })
          .then(async (res) => {
            if (res.status !== 200) {
              throw new Error(
                `MAL error occurred. ${res.status}: ${await res.text()}`
              );
            }
            return res.json();
          })
          .then((data) => data);

      return fn;
    };
  };

  const anime_list = (config) => {
    return () => {
      if (config.q == undefined) {
        throw new ReferenceError("q parameter is required.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}?q=${config.q}&limit=${config.limit}&offset=${config.offset}&fields=${config.fields}`,
          {
            method: "GET",
            headers: {
              "X-MAL-CLIENT-ID": config.client_id,
            },
          }
        )
          .then(async (res) => {
            if (res.status !== 200) {
              throw new Error(
                `MAL error occurred. ${res.status}: ${await res.text()}`
              );
            }
            return res.json();
          })
          .then((data) => data);

      return fn;
    };
  };

  const anime_ranking = (config) => {
    return () => {
      if (config.ranking_type == undefined) {
        throw new ReferenceError("ranking_type perameter is needed.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}/ranking?ranking_type=${config.ranking_type}&limit=${config.limit}&offset${config.offset}&fields=${config.fields}`,
          {
            method: "GET",
            headers: {
              "X-MAL-CLIENT-ID": config.client_id,
            },
          }
        )
          .then(async (res) => {
            if (res.status !== 200) {
              throw new Error(
                `MAL error occurred. ${res.status}: ${await res.text()}`
              );
            }
            return res.json();
          })
          .then((data) => data);

      return fn;
    };
  };

  const seasonal_anime = (config) => {
    return () => {
      if (config.year == undefined) {
        throw new ReferenceError("year perameter is needed.");
      }
      if (config.season == undefined) {
        throw new ReferenceError("season perameter is needed.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}/season/${config.year}/${config.season}?sort=${config.sort}&limit=${config.limit}&offset=${config.offset}&fields=${config.fields}`,
          {
            method: "GET",
            headers: {
              "X-MAL-CLIENT-ID": config.client_id,
            },
          }
        )
          .then((res) => {
            if (res.status !== 200) {
              throw new Error(`MAL error occurred. ${res.status}: ${res.text()}`);
            }
            return res.json();
          })
          .then((data) => data);

      return fn;
    };
  };

  const suggested_anime = (config) => () => {
    if (config.auth_token == undefined) {
      throw new ReferenceError("auth_token parameter is required.");
    }
    const fn = () =>
      fetch__default["default"](
        `${config.url}/suggestions?limit=${config.limit}&offset=${config.offset}&fields=${config.fields}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${config.auth_token}`,
          },
        }
      )
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error(
              `MAL error occurred. ${res.status}: ${await res.text()}`
            );
          }
          return res.json();
        })
        .then((data) => data);

    return fn;
  };

  const API$4 = {
    url: "https://api.spoiledpotato.net/v2/anime",
  };

  const anime = (config = {}) => {
    config.url = API$4.url;
    if (config.client_id == undefined) {
      throw new ReferenceError("Missing MAL require: client_id");
    }
    if (config.limit == undefined) {
      config.limit = 100;
    }
    if (config.offset == undefined) {
      config.offset = 0;
    }
    if (config.fields == undefined) {
      config.fields =
        "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics";
    }
    if (config.sort == undefined) {
      config.sort = "anime_score";
    } return {
        anime_list: anime_list(config),
        anime_details: anime_details(config),
        anime_ranking: anime_ranking(config),
        seasonal_anime: seasonal_anime(config),
        suggested_anime: suggested_anime(config),
    };
};

