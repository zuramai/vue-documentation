<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="introduction">
        <a href="#introduction">Alert</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>Notifications to the user at execution time with good animation and functionality</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Color</a></h3>

            <docs-p class='mb-4'>You can change the color of the alert with the property color. You are able to use the Main Colors or RGB and HEX colors.</docs-p>
            <kait-alert color="primary">This is a primary alert.</kait-alert>
            <code-highlight language="html">
                <pre v-text="color"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Dismissable</a></h3>

            <docs-p class='mb-4'>You can change make the alert become dismissable with the property dismissable. </docs-p>
            <kait-alert color="primary" :dismissable="true">You can dismiss this alert.</kait-alert>
            <code-highlight language="html">
                <pre v-text="dismissable"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="title"><a href="#title">Title</a></h3>

            <docs-p class='mb-4'>You can change the title of the alert with the property title. </docs-p>
            <kait-alert color="success" title="Success">This is a success alert.</kait-alert>
            <code-highlight language="html">
                <pre v-text="title"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="icon"><a href="#icon">Icon</a></h3>

            <docs-p class='mb-4'>You can change the icon of the alert with the property title. You can use the icon class.</docs-p>
            <kait-alert color='danger' icon="fas fa-exclamation-circle">Error! Please check your username and password.</kait-alert>
            <code-highlight language="html">
                <pre v-text="icon"></pre>
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
            color:'<kait-alert color="primary">This is a primary alert.</kait-alert>',
            title: '<kait-alert color="success" title="Success">This is a success alert.</kait-alert>',
            icon: '<kait-alert color="danger" icon="fas fa-exclamation-circle">Error! Please check your username and password.</kait-alert>',
            dismissable: '<kait-alert color="primary" :dismissable="true">You can dismiss this alert.</kait-alert>',
            dismissed: false,

            apis: [
              {
                name: 'color',
                type: 'String',
                parameter: 'primary,success,danger,warning,dark,info',
                desc: 'Background color of the alert',
                default: 'primary',
              },
              {
                name: 'title',
                type: 'String',
                parameter: '',
                desc: 'Title of the alert',
                default: '',
              },
              {
                name: 'dismissable',
                type: 'String',
                parameter: '',
                desc: 'Title of the alert',
                default: '',
              },
              {
                name: 'icon',
                type: 'String',
                parameter: '',
                desc: 'Title of the alert',
                default: '',
              },
              {
                name: '@onClose',
                type: 'event',
                parameter: '',
                desc: 'Emitted when alert dismissed',
                default: '',
              },
            ]
        }
    }
}
</script>
<style>
</style>