<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="badge">
        <a href="#badge">Badge</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>The avatar image for user</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Color</a></h3>

            <docs-p class='mb-4'>You can change the color of the alert with the property color. You are able to use the Main Colors or RGB and HEX colors.</docs-p>
            <div class="flex items-center">
                <kait-badge color="primary">Primary</kait-badge>
            </div>
            <code-highlight language="html">
                <pre v-text="color"></pre>
            </code-highlight>
        </section>


        

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800 mb-5' id="icon"><a href="#icon">API</a></h3>
            <kait-table type="striped" :responsive="true">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Parameter</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(api, index) in apis" :key="index">
                  <td>{{ api.name }}</td>
                  <td>{{ api.type }}</td>
                  <td>{{ api.parameter }}</td>
                  <td>{{ api.desc }}</td>
                  <td>{{ api.default }}</td>
                </tr>
              </tbody>
            </kait-table>
        </section>
        
            
    </section>
  </div>
</template>

<script>
import 'vue-waves-effect/dist/vueWavesEffect.css'

export default {
    mounted() {
        console.log('alert')
    },
    data() {
        return {
            color:'<kait-badge color="primary">Primary</kait-badge>',
          

            apis: [
              {
                name: 'color',
                type: 'String',
                parameter: 'primary,secondary,warning,success,danger,dark,light',
                desc: 'Size of the avatar',
                default: '',
              },
            ]
        }
    }
}
</script>