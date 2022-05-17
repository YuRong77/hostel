<template>
  <div class="home" :style="{ backgroundImage: `url(${HomeImage})` }">
    <div class="home_filter"></div>
    <div class="home_content">
      <div class="content_logo">
        <img src="../assets/logo.png" alt="" />
        <ul>
          <li>tel : (02)-2290-7000</li>
          <li>mail : luxuryhotel@gmail.com</li>
          <li>Taipei 110 Xinyi District</li>
        </ul>
      </div>
      <div class="content_rooms">
        <div class="rooms_card" v-for="item in AllRooms" :key="item.id" @click="getRoom(item.id)">
          <div class="rooms_card_img" :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
          <div class="rooms_card_title">
            <h3>{{ item.name }}</h3>
            <p>平日價格 : {{ item.normalDayPrice }}</p>
            <p>價日價格 : {{ item.holidayPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AllRooms: [],
      HomeImage:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    };
  },
  methods: {
    getRooms() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/rooms`;
      vm.$bus.$emit('Loading', true);
      vm.axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            accept: 'application/json',
          },
        })
        .then((res) => {
          vm.AllRooms = res.data.items;
          vm.$bus.$emit('Loading', false);
        });
    },
    getRoom(id) {
      this.$router.push(`/${id}`);
    },
  },
  created() {
    this.getRooms();
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  &_filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  &_content {
    display: flex;
    z-index: 5;
  }
}
.content_logo {
  margin-right: 150px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  & ul {
    margin-top: auto;
    & li {
      list-style: none;
      color: white;
      margin: 10px;
    }
  }
}
.content_rooms {
  width: 810px;
  display: flex;
  flex-wrap: wrap;
}
.rooms_card {
  position: relative;
  width: 270px;
  height: 270px;
  overflow: hidden;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
  }
  &:hover &_img {
    transform: scale(1.2);
    filter: brightness(0.4);
  }
  &:hover &_title {
    opacity: 1;
  }
  &_img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: all 0.5s;
  }
  &_title {
    text-align: center;
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 80px 0;
    opacity: 0;
    transition: all 0.5s;
    & h3 {
      margin-bottom: 15px;
    }
    & p {
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 1240px) {
  .content_rooms {
    width: 540px;
  }
}
@media (max-width: 980px) {
  .home_content {
    flex-direction: column;
    align-items: center;
  }
  .content_logo {
    flex-direction: row;
    margin: 20px 0;
    & ul {
      margin: auto;
    }
  }
}
@media (max-width: 560px) {
  .content_logo {
    flex-direction: column;
    & ul {
      margin: 20px 0;
    }
  }
  .content_rooms {
    width: 270px;
    & .rooms_card {
      margin-bottom: 15px;
    }
  }
}
</style>
