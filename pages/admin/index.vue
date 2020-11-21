<template>
  <div class="mt-20">
    <h1>Admin</h1>
    <div data-app>
      <Editor  />
    </div>
    <form @submit.prevent >
      <textarea name="" id="" cols="30" rows="10" v-model="info"></textarea>
      <input type="submit" value="SEND" @click="sendData">
    </form>
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
