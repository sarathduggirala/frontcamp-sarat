import { newsApiEndPoint } from "./Endpoints.js";

export default function getAuthorsList(channelId) {
  let channelAuthorEndpoint = newsApiEndPoint.articlesEndPoint;
  const url = `${channelAuthorEndpoint}source=${channelId}&apiKey=${
    newsApiEndPoint.key
  }`;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.articles)
    .catch(error => JSON.stringify(error));
}
