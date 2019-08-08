import { newsApiEndPoint } from "./Endpoints.js";
export default function getChannels() {
  return fetch(newsApiEndPoint.getAllChannelsEndpoint)
    .then(response => response.json())
    .then(json => json.sources)
    .catch(error => JSON.stringify(error));
}
