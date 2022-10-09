<template>
  <div>
    <div class="my-5 d-flex justify-center">
      <v-btn
        class="mx-5"
        v-for="(courseTitel, index) in courses"
        :key="index"
        depressed
        color="primary"
        @click="setFilter(index)"
        :color="select === index ? 'red' : 'white'"
      >
        {{ courseTitel.name }}
      </v-btn>
    </div>
    <div class="my-5">
      <hr />
    </div>
    <div>
      <v-row>
        <v-col
          md="4"
          class="mx-auto"
          v-for="(cours, index) in filterdata"
          :key="index"
        >
          <v-card max-width="344" height="400">
            <v-card-title>{{ cours.title }}</v-card-title>
            <v-img
              :src="
                cours.photo
                  ? cours.photo
                  : 'https://www.w3schools.com/howto/img_avatar2.png'
              "
              height="200px"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "ManualFilter",
  data() {
    return {
      courses: [],
      filterdata: [],
      select: 0,
    };
  },
  created() {
    if (this.courses && this.courses < 1) {
      this.init();
    }
  },
  methods: {
    init() {
      this.axios(
        "https://damp-willow-zsm0ocei5arf.vapor-farm-d1.com/api/course-category?filter=active"
      ).then((res) => {
        this.courses = res.data.data;
        this.filterdata = this.courses[0].courses.data;
      });
    },
    setFilter(index) {
      this.select = index;
      if (this.courses[index].courses.data.length > 0) {
        this.filterdata = this.courses[index].courses.data;
      } else {
        this.filterdata = this.courses[index].children;
      }
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
</style>
