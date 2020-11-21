<template>
  <div class="mt-20">
    <h1>Admin</h1>
    <div data-app>
      <Editor v-model="info" />
    </div>
    <Button type="primary" @click="sendData">BOUTON</Button>
  </div>
</template>

<script>
import Editor from "~/components/editor";
import Button from "~/components/Button/Button";

export default {
  data() {
    return {
      info: "My default Content"
    };
  },
  components: {
    Editor,
    Button
  },
  methods: {
    sendData() {
      console.log(this.info);
    }
  }
};
</script>

<style></style>
