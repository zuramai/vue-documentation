<template>
    <span :class="{'badge bg-gray-400 rounded-lg px-2  box-border py-1  inline-block font-normal tracking-wide align-middle':true, [`badge-${color}`]:true}">
        <slot>Badge</slot>
    </span>
</template>
<script>
export default {
    props: {
        color: {
            required: false,
            default: "primary"
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/components/_badge";
</style>