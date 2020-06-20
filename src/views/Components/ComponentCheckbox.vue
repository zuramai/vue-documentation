<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="badge">
        <a href="#badge">Checkbox</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>Aggressive and impacting effect and the most important functional</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Basic Usage</a></h3>

            <docs-p class='mb-4'>To add a checkBox, we have the kait-checkbox component which expects a principal parameter v-model that would be our value.</docs-p>
                
                <kait-checkbox name="checkbox1" v-model="checkBox1" val="Vue" label="Vue"></kait-checkbox>
                <kait-checkbox name="checkbox1" v-model="checkBox1" val="React" label="React"></kait-checkbox>
                <kait-checkbox name="checkbox1" v-model="checkBox1" val="Angular" label="Angular"></kait-checkbox>
                <kait-checkbox name="checkbox1" disabled val="disabled" label="Disabled"></kait-checkbox>
                <docs-p class='mb-4'>You choosed:  {{checkBox1}}</docs-p>


            <code-highlight language="html">
                <pre v-text="basic"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Colors</a></h3>

                  <docs-p class='mb-4'>To add a color to checkbox, you could use color property.</docs-p>


                  <kait-checkbox name="checkboxColor" v-model="checkboxColor.primary" color="primary" val="primary" label="Primary"></kait-checkbox>
                  <kait-checkbox name="checkboxColor" v-model="checkboxColor.secondary" color="secondary" val="secondary" label="Secondary"></kait-checkbox>
                  <kait-checkbox name="checkboxColor" v-model="checkboxColor.success" color="success" val="success" label="Success"></kait-checkbox>
                  <kait-checkbox name="checkboxColor" v-model="checkboxColor.warning" color="warning" val="warning" label="Warning"></kait-checkbox>
                  <kait-checkbox name="checkboxColor" v-model="checkboxColor.danger" color="danger" val="danger" label="Danger"></kait-checkbox>
                  <kait-checkbox name="checkboxColor" v-model="checkboxColor.dark" color="dark" val="dark" label="Dark"></kait-checkbox>
            <code-highlight language="html">
                <pre v-text="basic"></pre>
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

export default {
    mounted() {
        console.log('alert')
    },
    data() {
        return {
            basic:'<kait-checkbox name="checkbox1" v-model="checkBox1" val="Vue" label="Vue"></kait-checkbox>\n\
<kait-checkbox name="checkbox1" v-model="checkBox" val="React" label="React"></kait-checkbox>\n\
<kait-checkbox name="checkbox1" v-model="checkBox" val="Angular" label="Angular"></kait-checkbox>\n\
<kait-checkbox name="checkbox1" disabled val="disabled" label="Disabled"></kait-checkbox>',
          
            checkBox1: [],
            checkboxColor: {
                primary: true,
                secondary: true,
                warning: true,
                danger: true,
                success: true,
                dark: true,
            },

            apis: [
              {
                name: 'id',
                type: 'String',
                parameter: '',
                desc: 'id for the checkbox',
                default: '',
              },
              {
                name: 'color',
                type: 'String',
                parameter: 'primary,secondary,warning,success,danger,dark,light',
                desc: 'choose color',
                default: 'primary',
              },
              {
                name: 'label',
                type: 'String',
                parameter: '',
                desc: 'label text to display after checkbox',
                default: '',
              },
              {
                name: 'disabled',
                type: 'Boolean',
                parameter: '',
                desc: 'you can disable the checkbox',
                default: 'false',
              },
              {
                name: 'name',
                type: 'String',
                parameter: '',
                desc: 'checkbox name parameter',
                default: '',
              },
              {
                name: 'val',
                type: 'String',
                parameter: '',
                desc: 'Checkbox value',
                default: '',
              },
            ]
        }
    }
}
</script>