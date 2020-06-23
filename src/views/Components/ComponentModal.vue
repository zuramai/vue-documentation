<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="input">
        <a href="#modal">Modal</a>
      </h1>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="default"><a href="#default">Default</a></h3>

            <docs-p class='mb-4'>Click the button to show modal</docs-p>
            <kait-button @click="modalOpen=true">Open Modal</kait-button>
            <code-highlight language="html">
                <pre v-text="defaultModal"></pre>
            </code-highlight>
            <code-highlight language="javascript">
                <pre v-text="defaultModalJS"></pre>
            </code-highlight>
        </section>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="modal-position"><a href="#modal-position">Modal Position</a></h3>

            <docs-p class='mb-4'>Click the button to show modal with custom position</docs-p>
            <!-- Modal Top Left -->
            <kait-button @click="modalPosition.topLeft = true">Top Left</kait-button>
            <kait-modal position="top-left" :open='modalPosition.topLeft' @closeModal="modalPosition.topLeft=false">
                <template v-slot:modal-header>
                    Modal Header
                </template>
                <template v-slot:modal-body>
                    Modal Body
                </template>
                <template v-slot:modal-footer>
                    <span class='text-gray-600'>Modal Footer</span>
                </template>
            </kait-modal>

            <!-- Modal Top Right -->
            <kait-button @click="modalPosition.topRight = true" class='ml-3'>Top Right</kait-button>
            <kait-modal position="top-right" :open='modalPosition.topRight' @closeModal="modalPosition.topRight=false">
                <template v-slot:modal-header>
                    Modal Header
                </template>
                <template v-slot:modal-body>
                    Modal Body
                </template>
                <template v-slot:modal-footer>
                    <span class='text-gray-600'>Modal Footer</span>
                </template>
            </kait-modal>

            <!-- Modal Top Center -->
            <kait-button @click="modalPosition.topCenter = true" class='ml-3'>Top Center</kait-button>
            <kait-modal position="top-center" :open='modalPosition.topCenter' @closeModal="modalPosition.topCenter=false">
                <template v-slot:modal-header>
                    Modal Header
                </template>
                <template v-slot:modal-body>
                    Modal Body
                </template>
                <template v-slot:modal-footer>
                    <span class='text-gray-600'>Modal Footer</span>
                </template>
            </kait-modal>

            <!-- Modal Top Center -->
            <kait-button @click="modalPosition.topCenter = true" class='ml-3'>Bottom Center</kait-button>
            <kait-modal position="top-center" :open='modalPosition.topCenter' @closeModal="modalPosition.topCenter=false">
                <template v-slot:modal-header>
                    Modal Header
                </template>
                <template v-slot:modal-body>
                    Modal Body
                </template>
                <template v-slot:modal-footer>
                    <span class='text-gray-600'>Modal Footer</span>
                </template>
            </kait-modal>
            <code-highlight language="html">
                <pre v-text="modalPositionCode"></pre>
            </code-highlight>
            <code-highlight language="javascript">
                <pre v-text="defaultModalJS"></pre>
            </code-highlight>
        </section>

    
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800 mb-5' id="api"><a href="#api">API</a></h3>
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
            defaultModal: '<kait-button @click="modalOpen=true">Open Modal</kait-button>\n\
            \n\
<kait-modal :open="modalOpen" @closeModal="modalOpen=false">\n\
    <template v-slot:modal-header>\n\
        Modal Header\n\
    </template>\n\
    <template v-slot:modal-body>\n\
        Modal Body\n\
    </template>\n\
    <template v-slot:modal-footer>\n\
        <span class="text-gray-600">Modal Footer</span>\n\
    </template>\n\
</kait-modal>',
            defaultModalJS: 'export default {\n\
    data() {\n\
        return {\n\
            modalOpen: false\n\
        }\n\
    }\n\
}',
            modalPositionCode: '<kait-modal position="top-left" :open="modalOpen" @closeModal="modalOpen=false">\n\
    <template v-slot:modal-header>\n\
        Modal Header\n\
    </template>\n\
    <template v-slot:modal-body>\n\
        Modal Body\n\
    </template>\n\
    <template v-slot:modal-footer>\n\
        <span class="text-gray-600">Modal Footer</span>\n\
    </template>\n\
</kait-modal>',
            apis: [
                {
                    name: 'open',
                    type: 'Boolean',
                    parameter: '',
                    desc: 'Determine the modal is open or not',
                    default: false,
                },
                {
                    name: 'position',
                    type: 'String',
                    parameter: 'center, top-left, top-right, top-center, bottom-left, bottom-right',
                    desc: 'the modal position',
                    default: 'center',
                },
                {
                    name: 'background',
                    type: 'String',
                    parameter: 'use rgb/rgba/hex color',
                    desc: 'the body background when modal is open',
                    default: 'rgba(0, 0, 0, .7)',
                },
                {
                    name: 'size',
                    type: 'String',
                    parameter: 'sm,md,lg',
                    desc: 'the modal size',
                    default: 'md',
                },
            ],
            modalOpen: false,
            modalPosition: {
                topLeft: false,
                topRight: false,
                topCenter: false,
                bottomleft: false,
                bottomright: false,
                bottomcenter: false,
                center: false,
            }
        }
    },
    methods: {
        openModal() {
            this.modalBasicOpen = true;
            console.log(this.modalBasicOpen)
        }
    }
}
</script>