<template>
  <div>
    <div class="flex h-full overflow-y-hidden">
      <!-- SIDEBAR -->
      <div class="w-2/12 flex flex-col sidebar fixed">
        test
      </div>
      <!-- FONCTIONS -->
      <div class="w-2/3 pt-16 flex flex-col absolute main">
        <div
          v-for="(data, index) in this.jsoncontent"
          :key="index"
          class="prism p-4 my-6 rounded-xl shadow-lg"
        >
          <div class="flex flex-row justify-between">
            <h2>
              {{ data.title }}
            </h2>
            <button
              class="copy self-start"
              :data-clipboard-target="'#x' + index"
              data-clipboard-action="copy"
            >
              Copier
            </button>
          </div>
          <p>
            {{ data.description }}
          </p>
          <pre class="language-pascal rounded-lg">
          <code :id="'x'+index">
          {{ data.code }}
          </code>
        </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
import Prism from "~/plugins/prism";
import "prismjs/components/prism-pascal";
import axios from "axios";

export default {
  data() {
    return {
      jsoncontent: ""
    };
  },
  mounted() {
    axios.get("/.netlify/functions/getFile").then(res => {
      this.jsoncontent = res.data;
    });
    Prism.highlightAll();

    new ClipboardJS("button.copy");
  }
};
</script>

<style src="./index.css"></style>
