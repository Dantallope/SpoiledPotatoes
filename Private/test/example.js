// const anime = MAL().anime;
// const user_animelist = MAL().user_animelist;
// const forum = MAL().forum;
// const manga = MAL().manga;
// const user_mangalist = MAL().mangalist;
// const user = MAL().user;
// 
// anime({
//   client_id: "insert client_id here",
//   q: "one",
//   limit: 4,
// })
//   .anime_list()()
//   .then((data) => console.log(data));
// 
// user_animelist({
//   auth_token: "insert auth_token here",
//   anime_id: 17074,
//   score: 10,
// })
//   .update_animelist()()
//   .then((data) => console.log(data));
// 
// forum({
//   client_id: "insert client_id here",
// })
//   .forum_boards()()
//   .then((data) => console.log(data));
// 
// manga({
//   client_id: "insert client_id here",
//   q: "one",
// })
//   .manga_list()()
//   .then((data) => console.log(data));
// 
// user_mangalist({
//   auth_token: "insert auth_token here",
//   manga_id: 208,
// })
//   .update_mangalist()()
//   .then((data) => console.log(data));
// 
// user({
//   user_id: "@me",
//   auth_token: "insert auth_token here",
// })
//   .get_information()()
//   .then((data) => console.log(data));
// 
// 
// 
//   //anime
// 
//   anime({
//     client_id!: string,
//     q!: string,
//     limit?: int,
//     offset?: int,
//     fields?: string,
//   })
//     .animelist()() => Promise<any>
//   
//   anime({
//     client_id!: string,
//     anime_id!: int,
//     fields?: string,
//   })
//     .anime_details()() => Promise<any>
//   
//   anime({
//     client_id!: string,
//     ranking_type!: string,
//     limit?: int,
//     offset?: int,
//     fields?: string
//   })
//     .anime_ranking()() => Promise<any>
//   
//   anime({
//     client_id!: string,
//     year!: int,
//     season!: string,
//     sort?: string,
//     limit?: int,
//     offset?: int,
//     fields?: string
//   })
//     .seasonal_anime()() => Promise<any>
//   
//   anime({
//     auth_token!: string,
//     limit?: int,
//     offset?: int,
//     fields?: string
//   })
//     .suggested_anime()()
// 
//     //User_animelist
// 
//     user_animelist({
//         auth_token!: string,
//         anime_id!: int,
//         status?: string,
//         is_rewatching?: boolean,
//         score?: int,
//         num_watched_episodes?: int,
//         priority?: int,
//         num_times_rewatched?: int,
//         rewatch_value?: int,
//         tags?: string,
//         comments?: string
//       })
//         .update_animelist()() => Promise<any>
//       
//       user_animelist({
//         auth_token!: string,
//         anime_id!: string,
//       })
//         .delete_anime_item()() => Promise<any>
//       
//       user_animelist({
//         client_id!: string,
//         user_name!: int,
//         auth_token?(unless user_name=@me): string,
//         sort?: string,
//         limit?: int,
//         offset?: int,
//       })
//         .get_animelist()()
// 
//         //forum
//         forum({
//             client_id!: string,
//           }).forum_boards()() => Promise<any>
//           
//           forum({
//             client_id!: string,
//             topic_id!: int,
//             limit?: int,
//             offset?: int,
//           }).forum_topic_detail()() => Promise<any>
//           
//           forum({
//             client_id!: string,
//             board_id?: int,
//             subboarrd_id?: int,
//             limit?: int,
//             offset?: int,
//             sort?: string,
//             q?: string,
//             topic_user_name?: string,
//             user_name?: string,
//           }).forum_topics()() => Promise<any>
// 
// //manga
// 
// manga({
//     client_id!: string,
//     q!: string,
//     limit?: int,
//     offset?: int,
//     fields?: string,
//   }).manga_list()() => Promise<any>
//   
//   manga({
//     client_id!: string,
//     manga_id!: int,
//     fields?: string,
//   }).manga_details()() => Promise<any>
//   
//   manga({
//     client_id!: string,
//     ranking_type!: string,
//     limit?: int,
//     offset?: int,
//     fields?: string
//   }).manga_ranking()() => Promise<any>
// 
//   //user manga list
//   user_mangalist({
//     auth_token!: string,
//     manga_id!: int,
//     status?: string,
//     is_rereading?: boolean,
//     score?: int,
//     num_volumes_read?: int,
//     num_chapters_read?: int,
//     priority?: int,
//     num_times_reread?: int,
//     reread_value?: int,
//     tags?: string,
//     comments?: string
//   }).update_mangalist()() => Promise<any>
//   
//   user_mangalist({
//     auth_token!: string,
//     manga_id!: string,
//   }).delete_manga_item()() => Promise<any>
//   
//   user_mangalist({
//     client_id!: string,
//     user_name!: int,
//     auth_token?(unless user_name=@me): string,
//     sort?: string,
//     limit?: int,
//     offset?: int,
//   })
//     .get_mangalist()() => Promise<any>
// 
//     //user 
// 
//     user({
//         auth_token!: string,
//         user_id!: "@me",
//         fields?: string,
//       }).get_information()() => Promise<any>