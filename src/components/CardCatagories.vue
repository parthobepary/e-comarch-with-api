<template>
  <v-container>
    <div>
      <CourseLoder :courseLoading="courseLoading"></CourseLoder>
    </div>
    <v-row>
      <v-col md="4" class="mx-auto" v-for="cours in courses" :key="cours.id">
        <v-card max-width="344" height="400">
          <v-card-title>{{ cours.title }}</v-card-title>
          <v-img :src="cours.photo" height="200px"></v-img>
          <div class="d-flex justify-space-around mt-6 bottom">
            <div class="d-flex">
              <h3 class="mr-5">{{ cours.video_count }} videos</h3>
              <h3>{{ cours.exam_count }} Exams</h3>
            </div>
            <div>
              {{
                isBefore(cours.discount_till)
                  ? cours.price
                  : cours.discounted_price
              }}
              taka
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import moment from "moment";
import CourseLoder from "./CourseLoder.vue";
export default {
  name: "CardCatagories",
  components: { CourseLoder },
  data() {
    return {};
  },
  props: ["courses", "courseLoading"],
  methods: {
    isBefore(disciuntdata) {
      console.log(moment().isBefore(disciuntdata));
    },
  },
};
</script>
