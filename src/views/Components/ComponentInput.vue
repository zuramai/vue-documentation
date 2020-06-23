<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="input">
        <a href="#input">Input</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>The avatar image for user</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#default">Default</a></h3>

            <docs-p class='mb-4'>Input with placeholder</docs-p>
            <kait-input placeholder="Placeholder"/>
            <kait-input placeholder="Disabled" disabled/>
            <code-highlight language="html">
                <pre v-text="placeholder"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="label"><a href="#label">Label </a></h3>
            <docs-p class='mb-4'>Display the label for input</docs-p>
            <kait-input label="Placeholder" class='mb-5'/>
            <code-highlight language="html">
                <pre v-text="label"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="label-placeholder"><a href="#label-placeholder">Label Placeholder</a></h3>
            <docs-p class='mb-4'>Placeholder will become a top label on focus</docs-p>
            <kait-input label-placeholder="Placeholder" class='mt-8'/>
            <code-highlight language="html">
                <pre v-text="labelPlaceholder"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="with-icon"><a href="#with-icon">With Icon</a></h3>
            <docs-p class='mb-4'>You can add an icon before the input</docs-p>
            <kait-input placeholder="Password" icon="fas fa-lock"/>
            <code-highlight language="html">
                <pre v-text="icon"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Color</a></h3>
            <docs-p class='mb-4'>You can change the input color</docs-p>
            <kait-input placeholder="Im red" icon="fas fa-lock" color="danger"/>
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
    data() {
        return {
            showCard: true,
            dismissed: false,
            placeholder: '<kait-input placeholder="Placeholder"/>\n\<kait-input placeholder="Disabled" disabled/>',
            label: '<kait-input label="Placeholder" class="mb-5"/>',
            labelPlaceholder: '<kait-input label-placeholder="Placeholder" class="mt-8"/>',
            icon: '<kait-input placeholder="Password" icon="fas fa-lock"/>',
            color: '<kait-input placeholder="Im red" icon="fas fa-lock" color="danger"/>',

            apis: [
                {
                    name: 'v-model',
                    type: 'String',
                    parameter: '',
                    desc: '',
                    default: 'false',
                },
                {
                    name: 'color',
                    type: 'String',
                    parameter: 'primary,secondary,warning,danger,success,dark',
                    desc: '',
                    default: 'false',
                },
                {
                    name: 'disabled',
                    type: 'Boolean',
                    parameter: '',
                    desc: 'disable the input ',
                    default: 'false',
                },
                {
                    name: 'placeholder',
                    type: 'String',
                    parameter: '',
                    desc: '',
                    default: '',
                },
                {
                    name: 'label-placeholder',
                    type: 'String',
                    parameter: '',
                    desc: 'placeholder that will become a label',
                    default: '',
                },
                {
                    name: 'icon',
                    type: 'String',
                    parameter: '',
                    desc: 'you can use icon class ',
                    default: '',
                },
                {
                    name: 'type',
                    type: 'String',
                    parameter: 'text,email,number,password',
                    desc: 'the input type',
                    default: 'text',
                },
                {
                    name: '@focus',
                    type: 'Event',
                    parameter: '',
                    desc: 'Emitted when input on focus',
                    default: '',
                },
                {
                    name: '@blur',
                    type: 'Event',
                    parameter: '',
                    desc: 'Emitted when user leave the input',
                    default: '',
                },
            ]
        }
    },
    methods: {
        toggleCard() {
            this.showCard = !this.showCard;
        },
        fadeOut() {
            this.dismissed=true;
        }
    }
}
</script>
<style lang="scss">
    
.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>