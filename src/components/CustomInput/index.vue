<script>
export default {
  props: {
    title: String,
    firstName: String,
    lastName: String,
  },
  emits: ["update:title", "update:firstName", "update:lastName"],
};
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  /><br />
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
