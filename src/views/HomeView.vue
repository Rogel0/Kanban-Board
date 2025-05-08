<template>
  <div id="HomeView" class="bg-gray-200 h-screen">
    <el-header
      class="flex justify-center gap-60 items-center sticky top-0 top-0 left-0 w-full bg-white z-50"
    >
      <div class="flex items-center gap-16">
        <h3 class="title">Kanbangina</h3>
        <div class="flex gap-8 text-sm text-black-600">
          <h3>Features</h3>
          <h3>Product guide</h3>
          <h3>Templates</h3>
          <h3>Pricing</h3>
          <h3>Enterprise</h3>
        </div>
      </div>

      <div class="flex gap-8">
        <el-button class="blueBtn">Get it free</el-button>
        <div class="flex gap-4">
          <el-button class="searchBtn" :icon="Search" link></el-button>
          <div class="border-1 border-gray-100"></div>
          <el-button @click="openTabs" class="signInBtn" link
            >Sign In</el-button
          >
        </div>
      </div>
    </el-header>
    <AuthModal :modalValue="isTabOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import AuthModal from "@/components/AuthModal.vue";

const isTabOpen = ref(false);

const openTabs = () => {
  isTabOpen.value = true;
};
</script>

<style scoped>
.blueBtn {
  background-color: rgba(34, 34, 241, 0.884);
  color: white;
  border-radius: 40px;
  width: 120px;
  font-size: 0.8em;
  font-weight: 700;
}

.signInBtn {
  font-size: 1em;
  font-weight: 700;
  color: #161616;
}

.searchBtn :deep(.el-icon) {
  color: black !important;
  font-size: 1.3em;
  font-weight: 500 !important;
}

.title {
  font-size: 1.3em;
  font-weight: 500;
}
</style>
