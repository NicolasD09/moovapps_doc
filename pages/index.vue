<template>
  <div class="flex align-top top-0 left-0 right-0 bottom-0 p-16">
    <div class="m-auto">
      <div class="my-4">
        <Logo />
      </div>
      <div class="mt-16 flex flex-row justify-evenly">
        <Button type="primary" to="/functions">Voir les fonctions</Button>
        <Button type="primary" to="/functions/add">Ajouter une fonction</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import axios from "axios";
export default {
  data() {
    return {
      jsoncontent: "",
    };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
