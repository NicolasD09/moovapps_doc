<template>
  <div class="mt-20">
    <h1>Admin</h1>
    <form @submit.prevent class="flex flex-col w-1/3">
      <label for="">Titre</label>
      <input
        type="text"
        name=""
        id=""
        class="border-2 border-gray-300 rounded-md my-4"
        v-model="titre"
      />
      <label for="">Description</label>
      <input
        type="text"
        name=""
        id=""
        class="border-2 border-gray-300 rounded-md my-4"
        v-model="description"
      />
      <label for="">Categorie</label>
      <input
        type="text"
        name=""
        id=""
        class="border-2 border-gray-300 rounded-md my-4"
        v-model="categorie"
      />
      <label for="">Code</label>
      <textarea
        name=""
        id=""
        class="border-2 border-gray-300 rounded-md my-4"
        v-model="code"
      >
      </textarea>
      <input type="submit" value="Send" @click="sendData" />
    </form>
  </div>
</template>

<script>
import Button from "~/components/Button/Button";
import axios from 'axios'
export default {
  data() {
    return {
      message: "My default Content",
      titre: '',
      description: '',
      categorie: '',
      code: '',
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
          ],
        },
      },
    };
  },
  components: {
    Button,
  },
  methods: {
    sendData() {
      axios.post(
        'https://ladocdeouf.netlify.app/.netlify/functions/writeFile',
        {
          titre: this.titre,
          description: this.description,
          categorie: this.categorie,
          code: this.code
        }
      ).catch(err => console.error(err))
    },
  },
};
</script>

<style></style>
