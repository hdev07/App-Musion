<style lang="scss">
@import "~/assets/scss/components/featherIcon.scss";
</style>

<script>
import * as icons from "vue-feather-icons";

export default {
  name: "FeatherIcon",
  props: {
    icon: { type: String, required: true },
    svgClasses: { type: [String, Object, Array], default: "" },
    badge: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clickFeather(event) {
      this.$emit("click", event);
    },
    mouseoverFeather(event) {
      this.$emit("mouseover", event);
    },
    mouseoutFeather(event) {
      this.$emit("mouseout", event);
    },
  },
  render(h) {
    let svg = h(icons[this.icon], { class: this.svgClasses });
    let badgeEl = h(
      "span",
      {
        class:
          "feather-icon-badge bg-primary text-white absolute px-2 py-1 rounded-full text-xs",
        style: "top: -9px right: -7px",
      },
      [this.badge]
    );
    let attr = {
      class: ["feather-icon select-none relative"],
      on: {
        click: this.clickFeather,
        mouseover: this.mouseoverFeather,
        mouseout: this.mouseoutFeather,
      },
    };
    let children = [svg];
    if (this.badge) children.push(badgeEl);
    return h("span", attr, children);
  },
};
</script>
