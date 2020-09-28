import EmberRouter from "@ember/routing/router";
import config from "routes/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("topic", { path: ":topic_id" }, function () {
    this.route("show", { path: "/" });
    this.route("edit");
  });
});
