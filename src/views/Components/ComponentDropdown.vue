<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="badge">
        <a href="#badge">Dropdown</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>Easy to implement options that seem only when the user needs them</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Basic Usage</a></h3>

            <docs-p class='mb-4'>You can change the color of the alert with the property color. You are able to use the Main Colors or RGB and HEX colors.</docs-p>
            <div class="flex items-center">
                <kait-dropdown v-model="dropdownShow1" animation="slide-vertical">
                    <template v-slot:toggler>
                        <kait-button @click="dropdownShow1=!dropdownShow1">Toggle Dropdown</kait-button>
                    </template>
                    <template v-slot:dropdown>
                        <kait-dropdown-item url="#">Link 1</kait-dropdown-item>
                        <kait-dropdown-item url="#">Link 2</kait-dropdown-item>
                        <kait-dropdown-item url="#">Link 3</kait-dropdown-item>
                    </template>
                </kait-dropdown>
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
          
            dropdownShow1: false,
            dropdownShow2: false,
            message: '',

            apis: [
              {
                name: 'v-model',
                type: 'Boolean',
                parameter: '',
                desc: 'Size of the avatar',
                default: '',
              },
              {
                name: 'position',
                type: 'String',
                parameter: '',
                desc: 'left, right',
                default: '',
              },
              {
                name: 'animation',
                type: 'String',
                parameter: '',
                desc: 'animation name',
                default: '',
              },
            ]
        }
    }
}
</script>