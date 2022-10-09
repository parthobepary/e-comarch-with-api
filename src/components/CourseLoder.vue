<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-skeleton-loader
          height="100vh"
          width="100%"
          v-bind="attrs"
          type="article, actions"
          v-if="courseLoading"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CourseLoder",
  data() {
    return {
      attrs: {
        class: "mb-6",
        boilerplate: true,
        elevation: 2,
      },
    };
  },
  props: ["courseLoading"],
};
</script>
