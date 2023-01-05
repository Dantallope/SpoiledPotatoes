import fetch from "cross-fetch";

export const manga_details = (config) => {
  return () => {
    if (config.manga_id == undefined) {
      throw new ReferenceError("manga_id parameter is required.");
    }
    const fn = () =>
      fetch(
        `${config.url}/${config.manga_id}?fields=${
          config.fields == undefined
            ? "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics"
            : config.fields
        }`,
        {
          method: "GET",
          headers: {
            "X-SP-CLIENT-ID": config.client_id,
          },
        }
      )
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error(
              `SP error occurred. ${res.status}: ${await res.text()}`
            );
          }
          return res.json();
        })
        .then((data) => data);

    return fn;
  };
};