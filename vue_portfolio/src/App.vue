<template>
  <div>
    <the-header></the-header>

    <router-view v-slot="{ Component }">
      <transition mode="in-out">
        <component :is="Component" />
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
.v-enter-from {
  opacity: 0;
  transform: translateY(-400px) scale(0.8);
}

.v-enter-active {
  transition: all 0.4s ease-in;
  opacity: 0.5;
  transform: translateY(-200px) scale(0.9);
  overflow: hidden;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0px) scale(1);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0px) scale(1);
}

.v-leave-active {
  transition: all 0.4s ease-in;
  opacity: 0.5;
  transform: translateY(200px) scale(0.8);
  overflow: hidden;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(400px) scale(0.9);
}

// .v-enter-active,
// .v-leave-active {
//   transition: all 0.2s ease;
//   transform: translateX(-400px);
// }

// .v-enter-from,
// .v-enter-to {
//   opacity: 0;
//   transform: translateX(0px);
// }

// .v-enter-from {
//   opacity: 0;
//   transform: translate(200px);
// }
</style>
