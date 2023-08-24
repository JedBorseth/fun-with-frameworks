export default defineEventHandler(async (event) => {
  let postIds: number[] = await $fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const query = getQuery(event);
  if (query && query.count) {
    postIds = postIds.splice(0, Number(query.count));
  } else {
    postIds = postIds.splice(0, 100);
  }
  return {
    statusCode: 200,
    body: postIds,
  };
});
