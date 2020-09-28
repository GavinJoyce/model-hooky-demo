import Route from "@ember/routing/route";

export default class TopicRoute extends Route {
  model({ topic_id }) {
    console.log("topic model hook");
    return {
      id: topic_id,
    };
  }
}
