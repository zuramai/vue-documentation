<template>
    <div class="home pt-16">
        <section class='mb-5'>
        <h1 class="title text-4xl font-semibold text-gray-800" id="input">
            <a href="#progress">Progress</a>
        </h1>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="default"><a href="#default">Default</a></h3>

            <docs-p class='mb-4'>Click the button to show modal</docs-p>
            <div class="progresses">
                <kait-progress color="primary" :percentage="50"/>
                <kait-progress color="success" :percentage="90"/>
                <kait-progress color="warning" :percentage="30"/>
                <kait-progress color="danger" :percentage="80"/>
                <kait-progress color="dark" :percentage="60"/>
            </div>
            <code-highlight language="html">
                <pre v-text="defaultProgress"></pre>
            </code-highlight>
        </section>
    
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="striped"><a href="#striped">Striped</a></h3>

            <docs-p class='mb-4'>You could use <code class="bg-gray-200">striped</code> property</docs-p>
            <div class="progresses">
                <kait-progress color="primary" percentage="50" striped/>
                <kait-progress color="success" percentage="90" striped/>
                <kait-progress color="warning" percentage="30" striped/>
                <kait-progress color="danger" percentage="80" striped/>
                <kait-progress color="dark" percentage="60" striped/>
            </div>
            <code-highlight language="html">
                <pre v-text="striped"></pre>
            </code-highlight>
        </section>
    
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="label"><a href="#label">With Label</a></h3>

            <docs-p class='mb-4'>You could use <code class="bg-gray-200">withLabel</code> property</docs-p>
            <div class="progresses">
                <kait-progress color="primary" percentage="50" withLabel/>
                <kait-progress color="success" percentage="90" withLabel/>
                <kait-progress color="warning" percentage="30" withLabel/>
                <kait-progress color="danger" percentage="80" withLabel/>
                <kait-progress color="dark" percentage="60" withLabel/>
            </div>
            <code-highlight language="html">
                <pre v-text="withLabel"></pre>
            </code-highlight>
        </section>
    
    
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="height"><a href="#height">Custom Height</a></h3>

            <docs-p class='mb-4'>You could use tailwind's <code class='text-red-600 bg-gray-100'>h-{number}</code> class</docs-p>
            <div class="progresses">
                <kait-progress color="primary" percentage="50" class="h-2"/>
                <kait-progress color="success" percentage="90" class="h-3"/>
                <kait-progress color="warning" percentage="30" class="h-4"/>
            </div>
            <code-highlight language="html">
                <pre v-text="height"></pre>
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
export default {
    data() {
        return {
            apis: [
                {
                    name: 'color',
                    type: 'String',
                    parameter: 'primary,secondary,warning,danger,success,dark,info',
                    desc: 'progress bar color',
                    default: 'primary'
                },
                {
                    name: 'percentage',
                    type: 'Number',
                    parameter: 'number 0-100',
                    desc: 'progress bar value',
                    default: '0'
                },
                {
                    name: 'withLabel',
                    type: 'Boolean',
                    parameter: '',
                    desc: 'display label after the progress',
                    default: 'false'
                },
                {
                    name: 'striped',
                    type: 'Boolean',
                    parameter: '',
                    desc: 'display striped color',
                    default: 'false'
                },
            ],
            defaultProgress: '\
<kait-progress color="primary" :percentage="50"/>\n\
<kait-progress color="success" :percentage="90"/>\n\
<kait-progress color="warning" :percentage="30"/>\n\
<kait-progress color="danger" :percentage="80"/>\n\
<kait-progress color="dark" :percentage="60"/>',
            striped: '\
<kait-progress color="primary" percentage="50" striped/>\n\
<kait-progress color="success" percentage="90" striped/>\n\
<kait-progress color="warning" percentage="30" striped/>\n\
<kait-progress color="danger" percentage="80" striped/>\n\
<kait-progress color="dark" percentage="60" striped/>',
            withLabel: '\
<kait-progress color="primary" percentage="50" withLabel/>\n\
<kait-progress color="success" percentage="90" withLabel/>\n\
<kait-progress color="warning" percentage="30" withLabel/>\n\
<kait-progress color="danger" percentage="80" withLabel/>\n\
<kait-progress color="dark" percentage="60" withLabel/>',
            height: '\
<kait-progress color="primary" percentage="50" class="h-2"/>\n\
<kait-progress color="success" percentage="90" class="h-3"/>\n\
<kait-progress color="warning" percentage="30" class="h-4"/>'
        }
    }
}
</script>
<style lang="scss">
    .progresses .progress {
        @apply mt-5
    }
</style>