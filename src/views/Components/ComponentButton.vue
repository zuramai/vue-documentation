<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="badge">
        <a href="#badge">Button</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>Easy-to-use button components</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="color"><a href="#color">Color</a></h3>

            <docs-p class='mb-4'>You can change the color of the alert with the property color. You are able to use the Main Colors or RGB and HEX colors.</docs-p>
            <div class="flex items-center">
                <div class="buttons my-3">
                    <kait-button type="button" color="primary">Primary</kait-button>
                    <kait-button type="button" color="secondary">Secondary</kait-button>
                    <kait-button type="button" color="success">Success</kait-button>
                    <kait-button type="button" color="danger">Danger</kait-button>
                    <kait-button type="button" color="warning">Warning</kait-button>
                    <kait-button type="button" color="info">Info</kait-button>
                    <kait-button type="button" color="light">Light</kait-button>
                    <kait-button type="button" color="dark">Dark</kait-button>
                </div>
            </div>
            <code-highlight language="html">
                <pre v-text="color"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="icon"><a href="#icon">Icon</a></h3>

            <docs-p class='mb-4'>You can add icon in the button with the property icon. You are able to use the icon class.</docs-p>
            <div class="flex items-center">
                <div class="buttons">
                    <kait-button type="button" color="primary" icon="fas fa-home"> Home</kait-button>
                    <kait-button type="button" color="warning" icon="fas fa-star"> Star</kait-button>
                    <kait-button type="button" color="success" icon="fas fa-check-circle"> Done</kait-button>
                </div>
            </div>
            <code-highlight language="html">
                <pre v-text="icon"></pre>
            </code-highlight>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="outline"><a href="#outline">Outline Button</a></h3>

            <docs-p class='mb-4'>You can use outline variant in the button with the property variant="outline"</docs-p>
            <div class="flex items-center">
                <div class="buttons">
                    <kait-button type="button" variant="outline" color="primary">Primary</kait-button>
                    <kait-button type="button" variant="outline" color="secondary">Secondary</kait-button>
                    <kait-button type="button" variant="outline" color="success">Success</kait-button>
                    <kait-button type="button" variant="outline" color="danger">Danger</kait-button>
                    <kait-button type="button" variant="outline" color="warning">Warning</kait-button>
                    <kait-button type="button" variant="outline" color="info">Info</kait-button>
                    <kait-button type="button" variant="outline" color="light">Light</kait-button>
                    <kait-button type="button" variant="outline" color="dark">Dark</kait-button>
                </div>
            </div>
            <code-highlight language="html">
                <pre v-text="outline"></pre>
            </code-highlight>
        </section>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="size"><a href="#size">Button Size</a></h3>

            <docs-p class='mb-4'>You can change the size of the button with the property size</docs-p>
            <div class="flex items-center">
                <div class="buttons">
                    <kait-button type="button" size="sm" color="danger">Small</kait-button>
                    <kait-button type="button" color="primary">Normal</kait-button>
                    <kait-button type="button" size="lg" color="dark">Large</kait-button>
                </div>
            </div>
            <code-highlight language="html">
                <pre v-text="size"></pre>
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
            color:"<kait-button type='button' color='primary'>Primary</kait-button>\n<kait-button type='button' color='secondary'>Secondary</kait-button>\n<kait-button type='button' color='success'>Success</kait-button>\n<kait-button type='button' color='danger'>Danger</kait-button>\n<kait-button type='button' color='warning'>Warning</kait-button>\n<kait-button type='button' color='info'>Info</kait-button>\n<kait-button type='button' color='light'>Light</kait-button>\n<kait-button type='button' color='dark'>Dark</kait-button>",
            icon: '<kait-button type="button" color="primary" icon="fas fa-home"> Home</kait-button>\n<kait-button type="button" color="warning" icon="fas fa-star"> Star</kait-button>\n<kait-button type="button" color="success" icon="fas fa-check-circle"> Done</kait-button>',
            outline: '<kait-button type="button" variant="outline" color="primary">Primary</kait-button>\n\
<kait-button type="button" variant="outline" color="secondary">Secondary</kait-button>\n\
<kait-button type="button" variant="outline" color="success">Success</kait-button>\n\
<kait-button type="button" variant="outline" color="danger">Danger</kait-button>\n\
<kait-button type="button" variant="outline" color="warning">Warning</kait-button>\n\
<kait-button type="button" variant="outline" color="info">Info</kait-button>\n\
<kait-button type="button" variant="outline" color="light">Light</kait-button>\n\
<kait-button type="button" variant="outline" color="dark">Dark</kait-button>\n',
            size: '<kait-button type="button" size="sm" color="danger">Small</kait-button>\n\
<kait-button type="button" color="primary">Normal</kait-button>\n\
<kait-button type="button" size="lg" color="dark">Large</kait-button>',

            apis: [
              {
                name: 'type',
                type: 'String',
                parameter: 'button, submit',
                desc: 'Button type',
                default: 'button',
              },
              {
                name: 'color',
                type: 'String',
                parameter: 'primary,secondary,warning,success,danger,dark,light',
                desc: 'the button color',
                default: '',
              },
              {
                name: 'size',
                type: 'String',
                parameter: 'sm, md, lg',
                desc: 'the button size',
                default: 'md',
              },
              {
                name: 'icon',
                type: 'String',
                parameter: 'sm, md, lg',
                desc: 'button icon, use icon class',
                default: 'md',
              },
              {
                name: 'variant',
                type: 'String',
                parameter: 'outline, filled',
                desc: 'button variant',
                default: 'filled',
              },
            ]
        }
    }
}
</script>
