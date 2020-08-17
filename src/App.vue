<template>
  <div id="app">
    <div class="loading" v-if="isLoading">
      <div class="item">
        <h2>LUXURY</h2>
        <p><i class="fas fa-circle-notch fa-spin"></i></p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    loading() {
      const vm = this;
      vm.$bus.$on('Loading', (load) => {
        vm.Loading(load);
      })
    },
    Loading(load) {
      this.isLoading = load;
    }
  },
  created() {
    this.loading();
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft JhengHei";
  box-sizing: border-box;
  list-style: none;
}
img {
  width: 100%;
  vertical-align: middle;
}
.loading {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  & .item {
    animation-name: flash;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    & h2 {
      font-size: 50px;
      padding: 20px 20px;
      border: 5px solid black;
    }
    & p {
      font-size: 24px;
      padding: 40px;
      text-align: center;
    }
  }
}
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
