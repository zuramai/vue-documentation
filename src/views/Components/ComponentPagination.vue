<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="input">
        <a href="#pagination">Pagination</a>
      </h1>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800 mb-2' id="default"><a href="#default">Basic Usage</a></h3>
            <docs-p>Default pagination with navigation button</docs-p>
            <kait-pagination :total="40" v-model="basicPagination" class='mt-4'></kait-pagination>
            <code-highlight language="html">
                <pre v-text="basicPaginationHTML"></pre>
            </code-highlight>
            <code-highlight language="javascript">
                <pre v-text="basicPaginationJS"></pre>
            </code-highlight>
        </section>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800 mb-2' id="pagination-type"><a href="#pagination-type">Pagination Type</a></h3>
            <docs-p>Default pagination with navigation button</docs-p>
            <kait-pagination :total="40" v-model="paginationType" type="simple" ></kait-pagination>
            <kait-pagination :total="40" v-model="paginationType"  ></kait-pagination>
            <kait-pagination :total="40" v-model="paginationType" type="long" ></kait-pagination>

            <code-highlight language="html">
                <pre v-text="paginationTypeHTML"></pre>
            </code-highlight>
            <code-highlight language="javascript">
                <pre v-text="basicPaginationJS"></pre>
            </code-highlight>
        </section>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800 mb-2' id="pagination-type"><a href="#pagination-type">Color</a></h3>
            <docs-p>You could change the background color with <code class='bg-gray-100'>color</code> property</docs-p>
            <kait-pagination :total="40" v-model="paginationType" color="danger"></kait-pagination>
            <code-highlight language="html">
                <pre v-text="paginationColorHTML"></pre>
            </code-highlight>
            <code-highlight language="javascript">
                <pre v-text="basicPaginationJS"></pre>
            </code-highlight>
        </section>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800 mb-2' id="trigger-event"><a href="#trigger-event">Trigger Event</a></h3>
            <docs-p>You could trigger an event when the number or button is clicked </docs-p>
            <kait-pagination :total="40" v-model="triggerPaginate" class='mt-4' @onNextPage="nextPage()" @onPrevPage="prevPage()" @onToPage="toPage()"></kait-pagination>
            <docs-p>{{message}}</docs-p>
            <code-highlight language="html">
                <pre v-text="triggerEventHTML"></pre>
            </code-highlight>
            <code-highlight language="javascript">
                <pre v-text="triggerEventJS"></pre>
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
            basicPagination: 7,
            paginationType: 3,
            triggerPaginate: 7,
            programmaticPaginate: 7,
            message: '',
            apis: [
                {
                    name: 'v-model',
                    type: 'Number',
                    parameter: '',
                    desc: 'Link values.',
                    default: ''
                },
                {
                    name: 'color',
                    type: 'String',
                    parameter: '',
                    desc: 'primary,secondary,warning,danger,success,dark,info',
                    default: ''
                },
                {
                    name: 'total',
                    type: 'Number',
                    parameter: '',
                    desc: 'total number pages.',
                    default: '1'
                },
                {
                    name: 'type',
                    type: 'simple, long',
                    parameter: '',
                    desc: 'pagination type',
                    default: ''
                },
                {
                    name: 'float',
                    type: 'String',
                    parameter: 'left, right',
                    desc: 'the pagination position',
                    default: 'left'
                },
                {
                    name: '@onPrevPage',
                    type: 'Event',
                    parameter: '',
                    desc: 'triggered when prev button is clicked',
                    default: ''
                },
                {
                    name: '@onNextPage',
                    type: 'Event',
                    parameter: '',
                    desc: 'triggered when next button is clicked',
                    default: ''
                },
                {
                    name: '@onToPage',
                    type: 'Event',
                    parameter: '',
                    desc: 'triggered when number is clicked',
                    default: ''
                },
            ],

            basicPaginationHTML: '<kait-pagination :total="40" v-model="page" class="mt-4"></kait-pagination>',
            basicPaginationJS: 'export default {\n\
    data() {\n\
        return {\n\
            page: 7\n\
        }\n\
    }\n\
}',
            triggerEventHTML: '<kait-pagination :total="40" v-model="triggerPaginate" class="mt-4" @onNextPage="nextPage()" @onPrevPage="prevPage()" @onToPage="toPage()"></kait-pagination>\n<p>{{message}}</p>',
            triggerEventJS: 'export default {\n\
    data() {\n\
        return {\n\
            page: 7\n\
        }\n\
    }\n\
    methods: {\n\
        nextPage() {\n\
            this.message = "You clicked next page. Going to page "+this.page;\n\
        },\n\
        prevPage() {\n\
            this.message = "You clicked previous page. Going to page "+this.page;\n\
        },\n\
        toPage() {\n\
            this.message = "You go to page "+this.page\n\
        }\n\
    }\n\
}',
        
            paginationTypeHTML: '<kait-pagination :total="40" v-model="page" type="simple" ></kait-pagination>\n\
<kait-pagination :total="40" v-model="page"></kait-pagination>\n\
<kait-pagination :total="40" v-model="page" type="long"></kait-pagination>',
            paginationColorHTML: '<kait-pagination :total="40" v-model="page" color="danger"></kait-pagination>',
        }
    },
    methods: {
        nextPage() {
            this.message = "You clicked next page. Going to page "+this.triggerPaginate;
        },
        prevPage() {
            this.message = "You clicked previous page. Going to page "+this.triggerPaginate;
        },
        toPage() {
            this.message = "You go to page "+this.triggerPaginate
        }
    },
}
</script>