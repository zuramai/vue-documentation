<template>
  <div class="home pt-16">
    <section class='mb-5'>
      <h1 class="title text-4xl font-semibold text-gray-800" id="introduction">
        <a href="#card">Card</a>
      </h1>
        <p class='text-content mt-2 text-sm text-gray-800'>Cards contain content and actions about a single subject.</p>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="basic-usage"><a href="#basic-usage">Basic Usage</a></h3>

            <docs-p class='mb-4'>You can change the color of the alert with the property color. You are able to use the Main Colors or RGB and HEX colors.</docs-p>
            <kait-card>
                <kait-card-header>Card Title</kait-card-header>
                <kait-card-body>
                    This is some text within a card body. 
                </kait-card-body>
                <kait-card-footer>
                    Card Footer
                </kait-card-footer>
            </kait-card>
            <code-highlight language="html">
                <pre v-text="basic"></pre>
            </code-highlight>
        </section>
        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="basic-usage"><a href="#basic-usage">Card with Image Header</a></h3>

            <docs-p class='mb-4'>You add image header in the card. You are able to use the Main Colors or RGB and HEX colors.</docs-p>
            <kait-card class='w-1/2'>
                <img class="w-full" src="@/assets/images/card-top.jpg" alt="Sunset in the mountains">
                <kait-card-body>
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="bg-white text-gray-600 tracking-wide mb-0">
                        This is a card with image. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </kait-card-body>
                <kait-card-footer>
                    <a href="http://"><kait-badge type='light' class='font-semibold mr-2 transition duration-150 hover:text-white hover:bg-gray-700'>#photography</kait-badge></a>
                    <a href="http://"><kait-badge type='light' class='font-semibold mr-2 transition duration-150 hover:text-white hover:bg-gray-700'>#travel</kait-badge></a>
                    <a href="http://"><kait-badge type='light' class='font-semibold mr-2 transition duration-150 hover:text-white hover:bg-gray-700'>#winter</kait-badge></a>
                </kait-card-footer>
            </kait-card>
            <div class="overflow-x-auto w-full">
                <code-highlight language="html">
                    <pre v-text="withImage"></pre>
                </code-highlight>
            </div>
        </section>

        <section class='my-12'>
            <h3 class='section text-2xl font-semibold text-gray-800' id="basic-usage"><a href="#basic-usage">Card Actions</a></h3>

            <docs-p class='mb-4'>You add action button in card header.</docs-p>
            <kait-card>
                <kait-card-header>
                    <h6 class='mb-0'>Show/hide</h6>
                    <template v-slot:card-action>
                        <div class='ml-auto'>
                            <kait-button size="sm" @click="showCard=!showCard"><i class="fas fa-minus"></i></kait-button>
                        </div>
                    </template>
                </kait-card-header>
                <transition name="slide">
                    <div v-if="showCard">
                        <kait-card-body>
                            <p class="text-sm mb-2"> You can show or hide this card. </p>
                        </kait-card-body>
                        <kait-card-footer>
                            Card footer
                        </kait-card-footer>
                    </div>
                </transition>
            </kait-card>
            <transition name="fade">
                <kait-card v-show="!dismissed">
                    <kait-card-header>
                        <h6 class='mb-0'>Dismissable</h6>
                        <template v-slot:card-action>
                            <div class='ml-auto'>
                                <kait-button size="sm" @click="dismissed=!dismissed"><i class="fas fa-times"></i></kait-button>
                            </div>
                        </template>
                    </kait-card-header>
                        <div >
                            <kait-card-body>
                                <p class="text-sm mb-2"> You can dismiss this card. </p>
                            </kait-card-body>
                            <kait-card-footer>
                                Card footer
                            </kait-card-footer>
                        </div>
                </kait-card>
            </transition>
            <div class="overflow-x-auto w-full">
                <code-highlight language="html">
                    <pre v-text="actions"></pre>
                </code-highlight>
            </div>
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
            basic:'<kait-card>\n\
    <kait-card-header>Card Title</kait-card-header>\n\
    <kait-card-body>\n\
        This is some text within a card body. \n\
    </kait-card-body>\n\
    <kait-card-footer>\n\
        Card Footer\n\
    </kait-card-footer>\n\
</kait-card>',
            withImage: '<kait-card>\n\
    <img class="w-full" src="@/assets/images/card-top.jpg" alt="Sunset in the mountains">\n\
    <kait-card-body>\n\
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>\n\
        <p class="bg-white text-gray-600 tracking-wide mb-0">\n\
            This is a card with image. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.\n\
        </p>\n\
    </kait-card-body>\n\
    <kait-card-footer>\n\
    </kait-card-footer>\n\
</kait-card>',  
            actions: '<kait-card>\n\
    <kait-card-header>\n\
        <h6 class="mb-0">Show/hide</h6>\n\
        <template v-slot:card-action>\n\
            <div class="ml-auto">\n\
                <kait-button size="sm" @click="showCard=!showCard"><i class="fas fa-minus"></i></kait-button>\n\
            </div>\n\
        </template>\n\
    </kait-card-header>\n\
    <transition name="slide">\n\
        <div v-if="showCard">\n\
            <kait-card-body>\n\
                <p class="text-sm mb-2"> You can show or hide this card. </p>\n\
            </kait-card-body>\n\
            <kait-card-footer>\n\
                Card footer\n\
            </kait-card-footer>\n\
        </div>\n\
    </transition>\n\
</kait-card>\n\
<script>\n\
export default {\n\
    data() {\n\
        return {\n\
            showCard: true\n\
        }\n\
    }\n\
}\n </ script>',
            showCard: true,
            dismissed: false,
        
            apis: [
              
            ]
        }
    }
}
</script>