import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class NavigateComponent extends Component {
  @service router;

  @action
  navigate() {
    this.router.transitionTo(this.args.route);
  }
}
