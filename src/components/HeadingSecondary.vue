<template>
  <h2>{{message}}</h2>
</template>

<script>
export default {
props: ["message"]
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    background-image: linear-gradient(to right, #7da4ad, #25373b);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s;

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(#000, .2);
    }
}
</style>
