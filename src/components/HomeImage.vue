<template>
    <div>
      <v-img max-height="253" max-width="453" v-bind:src="image.image_url"></v-img>
    </div>
</template>

<script>

export default {
  props: ['image'],
};
</script>
