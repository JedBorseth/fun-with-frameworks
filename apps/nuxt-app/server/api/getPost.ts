export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log(query.postId);
  const postData: number[] = await $fetch(
    `https://hacker-news.firebaseio.com/v0/item/${query.postId}.json?print=pretty`
  );
  return {
    statusCode: 200,
    body: postData,
  };
});
