<template>
  <div>
    <LoaderSkeleton :isLoading="isLoading"></LoaderSkeleton>
    <v-container>
      <div class="tex-center">
        <h1 class="mb-15">All products route</h1>
        <hr />
        <div class="mt-10">
          <v-row class="mb-6" no-gutters>
            <v-col md="3" class="scroll-div">
              <template>
                <v-row justify="center" class="mr-8 mt-5">
                  <v-expansion-panels accordion>
                    <v-expansion-panel
                      v-for="catagory in chatagoris"
                      :key="catagory.id"
                    >
                      <v-expansion-panel-header>{{
                        catagory.name
                      }}</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-radio-group v-model="categorySlug">
                          <v-radio
                            v-for="singleData in catagory.children"
                            :key="singleData.id"
                            :label="singleData.name"
                            :value="singleData.slug"
                          ></v-radio>
                        </v-radio-group>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </template>
            </v-col>
            <v-col offset-sm="2" md="9" offset-md="0">
              <CardCatagories
                :courses="courses"
                :courseLoading="courseLoading"
              ></CardCatagories>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import CardCatagories from "../components/CardCatagories.vue";
import LoaderSkeleton from "../components/LoaderSkeleton.vue";
export default {
  name: "CoursesCatagoris",
  components: {
    CardCatagories,
    LoaderSkeleton,
  },
  data() {
    return {
      chatagoris: [],
      courses: [],
      radios: null,
      categorySlug: "",
      isLoading: false,
      courseLoading: false,
    };
  },
  created() {
    if (this.chatagoris || this.chatagoris.length < 1) {
      this.init("course-category/all", true);
    }
    if (this.courses || this.courses.length < 1) {
      this.init("course", false);
    }
  },
  computed: {},
  mounted() {},
  watch: {
    categorySlug() {
      this.init(`course-by-category/${this.categorySlug}`);
    },
  },
  methods: {
    async init(title, status) {
      this.isLoading = true;
      this.courseLoading = true;
      await this.axios.get(title).then((res) => {
        if (status) {
          this.chatagoris = res.data.data;
        }
        if (!status) {
          this.courses = res.data.data;
          this.courseLoading = false;
        }
        this.isLoading = false;
      });
    },
  },
};
</script>
<style lang="scss">
.scroll-div {
  max-height: 700px;
  height: 600px;
  overflow: auto;
}
.tex-center {
  text-align: center;
}
</style>
