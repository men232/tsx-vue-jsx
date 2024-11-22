import { defineComponent } from "@vue/runtime-core";

const node = <div>Hello World</div>;

const Main = defineComponent(() => {
  return () => node;
});
