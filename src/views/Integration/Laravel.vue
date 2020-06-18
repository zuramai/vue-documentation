<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="laravel-integration">
        <a href="#laravel-integration">Laravel Integration</a>
      </h1>
      <p class='text-content mt-2 text-sm text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae iusto exercitationem dolore tenetur omnis pariatur, aut vel est, aperiam amet rerum laudantium eius eaque ullam quam, sapiente nihil esse quae!</p>
      <p class='text-content mt-4 text-sm text-gray-800 '>1. Clone the repository</p>
      <code-highlight language="bash">
git clone https://github.com/devoverid/kait-admin && cd kait-admin
      </code-highlight>

      <p class='text-content mt-4 text-sm text-gray-800 '>2. Install Dependencies</p>
      <code-highlight language="bash">
        <pre>
npm install
# OR
yarn add
</pre>
      </code-highlight>

      <p class='text-content mt-4 text-sm text-gray-800 '>3. Run the app</p>
      <code-highlight language="bash">
        <pre>
npm run serve
# OR
yarn serve
</pre>
      </code-highlight>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    mounted() {
        console.log('installation,')
    },
  name: "Home",
  components: {
  }
};
</script>
