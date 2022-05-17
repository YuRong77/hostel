<template>
  <div>
    <div class="roomImg" v-if="RoomData.imageUrl">
      <div
        class="item"
        :style="{ backgroundImage: `url(${RoomData.imageUrl[0]})` }"
        @click="showImg(0)"
      ></div>
      <div
        class="item"
        :style="{ backgroundImage: `url(${RoomData.imageUrl[1]})` }"
        @click="showImg(1)"
      ></div>
      <div
        class="item"
        :style="{ backgroundImage: `url(${RoomData.imageUrl[2]})` }"
        @click="showImg(2)"
      ></div>
    </div>
    <VueEasyLightbox
      v-if="RoomData.imageUrl"
      escDisabled
      moveDisabled
      :imgs="LboxImg"
      :visible="visible"
      @hide="handleHide"
    ></VueEasyLightbox>
    <div class="container">
      <div class="roomDetail" v-if="RoomData.descriptionShort">
        <h2>{{ RoomData.name }}</h2>
        <ul>
          <li>
            預約房客人數 : {{ RoomData.descriptionShort.GuestMin }}~{{
              RoomData.descriptionShort.GuestMax
            }}
            位
          </li>
          <li>床型 : {{ RoomData.descriptionShort.Bed[0] }}</li>
          <li>衛浴數量 : {{ RoomData.descriptionShort["Private-Bath"] }} 間</li>
          <li>房間大小 : {{ RoomData.descriptionShort.Footage }} 平方公尺</li>
          <li>{{ RoomData.description }}</li>
        </ul>
        <div class="checkTime">
          <div class="checkIn">
            <span>Check In</span>
            <p>
              {{ RoomData.checkInAndOut.checkInEarly }} ~
              {{ RoomData.checkInAndOut.checkInLate }}
            </p>
          </div>
          <div class="checkOut">
            <span>Check Out</span>
            <p>{{ RoomData.checkInAndOut.checkOut }}</p>
          </div>
        </div>
        <ul class="amenities">
          <li :style="{ opacity: RoomData.amenities['Wi-Fi'] ? 1 : 0.3 }">
            <i class="fas fa-wifi"></i> Wi-Fi
          </li>
          <li :style="{ opacity: RoomData.amenities['Breakfast'] ? 1 : 0.3 }">
            <i class="fas fa-utensils"></i> 早餐
          </li>
          <li :style="{ opacity: RoomData.amenities['Mini-Bar'] ? 1 : 0.3 }">
            <i class="fas fa-glass-martini-alt"></i> Mini Bar
          </li>
          <li
            :style="{ opacity: RoomData.amenities['Room-Service'] ? 1 : 0.3 }"
          >
            <i class="fas fa-concierge-bell"></i> Service
          </li>
          <li :style="{ opacity: RoomData.amenities['Television'] ? 1 : 0.3 }">
            <i class="fas fa-tv"></i> 電視
          </li>
          <li
            :style="{
              opacity: RoomData.amenities['Air-Conditioner'] ? 1 : 0.3,
            }"
          >
            <i class="fas fa-wind"></i> 空調
          </li>
          <li
            :style="{ opacity: RoomData.amenities['Refrigerator'] ? 1 : 0.3 }"
          >
            <i class="fas fa-temperature-low"></i> 冰箱
          </li>
          <li :style="{ opacity: RoomData.amenities['Sofa'] ? 1 : 0.3 }">
            <i class="fas fa-couch"></i> 沙發
          </li>
          <li :style="{ opacity: RoomData.amenities['Great-View'] ? 1 : 0.3 }">
            <i class="fas fa-mountain"></i> 漂亮的視野
          </li>
          <li :style="{ opacity: RoomData.amenities['Smoke-Free'] ? 1 : 0.3 }">
            <i class="fas fa-smoking-ban"></i> 禁止吸煙
          </li>
          <li
            :style="{ opacity: RoomData.amenities['Child-Friendly'] ? 1 : 0.3 }"
          >
            <i class="fas fa-child"></i> 適合兒童
          </li>
          <li
            :style="{ opacity: RoomData.amenities['Pet-Friendly'] ? 1 : 0.3 }"
          >
            <i class="fas fa-paw"></i> 寵物攜帶
          </li>
        </ul>
      </div>
      <div class="appointment">
        <div class="roomPrice">
          <p>NT.{{ RoomData.normalDayPrice }}</p>
          <span>平日 ( 一 ~ 四 )</span>
          <p>NT.{{ RoomData.holidayPrice }}</p>
          <span>假日 ( 五 ~ 日 )</span>
        </div>
        <div class="roomDate">
          <div class="calendar">
            <calendar
            :min-date="new Date()"
            :disabled-dates="[...Booking]"
            ></calendar>
          </div>
          <button @click="showModel = true">預約日期</button>
          <!--<button @click="delRoom">刪除</button>-->
        </div>
      </div>
    </div>
    <div class="checkoutModel" v-if="showModel">
      <div class="modelBg"></div>
      <div class="checkoutCard">
        <form
          action=""
          @submit.prevent="postRoom"
          v-if="!checkSuccess && !checkFail"
        >
          <h3>預約資料</h3>
          <label for="username">姓名</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              type="text"
              id="username"
              placeholder="請輸入姓名"
              v-model="form.userName"
              required
            />
            <span class="tips">{{ errors[0] }}</span>
          </ValidationProvider>
          <label for="usertel">電話</label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              type="tel"
              id="usertel"
              placeholder="請輸入電話"
              v-model="form.userTel"
              required
            />
            <span class="tips">{{ errors[0] }}</span>
          </ValidationProvider>
          <label for="">預約日期</label>
          <date-picker
            :min-date="new Date()"
            :disabled-dates="[...Booking]"
            mode="range"
            v-model="SelectedDate"
          ></date-picker>
          <span class="tips">{{ DPtips }}</span>
          <div class="btn">
            <button type="reset" @click="closeModel">取消</button>
            <button type="submit" :class="{ eventNone: isLoading }">
              <i class="fas fa-spinner fa-spin" v-if="isLoading"></i>
              確認預約
            </button>
          </div>
        </form>
        <div class="checkSuccess" v-if="checkSuccess">
          <i class="far fa-check-circle fa-4x"></i>
          <h3>預約成功</h3>
          <button @click="goHome">回到首頁</button>
        </div>
        <div class="checkFail" v-if="checkFail">
          <i class="far fa-times-circle fa-4x"></i>
          <h3>預約失敗</h3>
          <p>指定日期已被預約或不再90天以內</p>
          <button @click="closeModel">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      RoomData: {},
      SelectedDate: {},
      form: {
        userName: "",
        userTel: "",
        newBooking: [],
      },
      Booking: [],
      visible:false,
      isLoading: false,
      showModel: false,
      checkSuccess: false,
      checkFail: false,
      LboxImg: "",
    };
  },
  computed: {
    DPtips() {
      if (!this.SelectedDate) return "請選擇日期";
      return "";
    },
  },
  methods: {
    getRoom() {
      const vm = this;
      const { id } = vm.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/room/${id}`;
      vm.$bus.$emit('Loading', true);
      vm.axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            accept: "application/json",
          },
        })
        .then((response) => {
          vm.RoomData = response.data.room[0];
          vm.Booking = response.data.booking;
          vm.$bus.$emit('Loading', false);
          const bookingDate = [];
          vm.Booking.forEach((item) =>
            bookingDate.push(
              new Date(
                item.date
                  .split("-")
                  .join()
                  .replace(/\b(0+)/gi, "")
              )
            )
          );
          vm.Booking = bookingDate;
        });
    },
    postRoom() {
      const vm = this;
      if (
        vm.form.userName == "" ||
        vm.form.userName == "" ||
        vm.SelectedDate == null
      )
        return;
      const { id } = vm.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}/room/${id}`;
      const start = new Date(
        vm.SelectedDate.start.setDate(vm.SelectedDate.start.getDate() + 1)
      );
      const startDay = start.toISOString().slice(0, 10);
      const end = new Date(
        vm.SelectedDate.end.setDate(vm.SelectedDate.end.getDate() + 1)
      );
      const endDay = end.toISOString().slice(0, 10);
      vm.getDate(startDay, endDay);
      const bookingData = {
        name: vm.form.userName,
        tel: vm.form.userTel,
        date: vm.form.newBooking,
      };
      vm.isLoading = true;
      vm.axios
        .post(url, bookingData, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            accept: "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            vm.checkSuccess = true;
            vm.isLoading = false;
            vm.getRoom();
          }
        })
        .catch(() => {
          vm.checkFail = true;
          vm.isLoading = false;
        });
    },
    getDate(start, end) { //取得兩日期之間其他日期
      if(start == end) return this.form.newBooking = start;
      const result = [];
      const beginDay = start.split("-");
      const endDay = end.split("-");
      const diffDay = new Date();
      const dateList = new Array();
      let i = 0;
      diffDay.setDate(beginDay[2]);
      diffDay.setMonth(beginDay[1] - 1);
      diffDay.setFullYear(beginDay[0]);
      result.push(start);
      while (i == 0) {
        var countDay = diffDay.getTime() + 24 * 60 * 60 * 1000;
        diffDay.setTime(countDay);
        dateList[2] = diffDay.getDate();
        dateList[1] = diffDay.getMonth() + 1;
        dateList[0] = diffDay.getFullYear();
        if (String(dateList[1]).length == 1) {
          dateList[1] = "0" + dateList[1];
        }
        if (String(dateList[2]).length == 1) {
          dateList[2] = "0" + dateList[2];
        }
        result.push(dateList[0] + "-" + dateList[1] + "-" + dateList[2]);
        if (
          dateList[0] == endDay[0] &&
          dateList[1] == endDay[1] &&
          dateList[2] == endDay[2]
        ) {
          i = 1;
        }
      }
      this.form.newBooking = result;
    },
    closeModel() {
      this.SelectedDate = null;
      this.showModel = false;
      this.checkFail = false;
      this.form.userName = "";
      this.form.userTel = "";
    },
    goHome() {
      this.$router.push("./");
    },
    showImg(index) {
      this.LboxImg = this.RoomData.imageUrl[index];
      this.visible = true;
    },
    handleHide() {
      this.visible = false
    },
    delRoom() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/rooms`;
      vm.axios
        .delete(url, {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
            accept: "application/json",
          },
        })
        .then((res) => {
          this.getRoom();
        });
    },
  },
  created() {
    this.getRoom();
  },
};
</script>

<style lang="scss" scoped>
$Hgray: #e6e6e6;
$Hdark: #627280;
$Hgreen: #04d600;
$Hred: #ec2c04;
.eventNone {
  pointer-events: none;
}
.roomImg {
  max-width: 100vw;
  height: 600px;
  display: flex;
  box-shadow: 3px 0 15px rgba(0,0,0,0.2);
  @media(max-width: 767px) {
    flex-direction: column;
  }
  & .item {
    flex: 1;
    background-position: center;
    background-size: cover;
    transition: all 1s;
    &:hover {
      cursor: pointer;
      flex: 2;
    }
  }
}
.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  padding: 40px 0;
  @media(max-width: 700px) {
    flex-direction: column;
  }
  & .roomDetail {
    max-width: 600px;
    padding: 0 20px;
    & h2 {
      font-size: 35px;
      margin-bottom: 20px;
    }
    & ul {
      font-size: 15px;
      margin-bottom: 30px;
      & li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
    }
    & .checkTime {
      display: flex;
      margin-bottom: 30px;
      & p {
        font-size: 24px;
        font-weight: 300;
      }
      & .checkIn {
        margin-right: 50px;
      }
    }
    & .amenities {
      background: $Hgray;
      border-radius: 4px;
      display: flex;
      flex-wrap: wrap;
      padding: 30px;
      & li {
        flex: 33%;
        margin-bottom: 20px;
        @media(max-width: 790px) {
          flex: 50%;
        }
        & i {
          width: 20px;
        }
      }
    }
  }
  & .appointment {
    max-width: 600px;
    padding: 0 20px;
    display: flex;
    @media(max-width: 1140px) {
      flex-direction: column;
    }
    @media(max-width: 1140px) {
      flex-direction: column;
    }
    & .roomPrice {
      margin: 0 40px 40px 0;
      & p {
        font-size: 24px;
        font-weight: 400;
        margin: 10px 0; 
      }
      & span {
        font-size: 14px;
      }
    }
    & .roomDate {
      & .calendar {
        position: relative;
        z-index: 0;  
        margin-bottom: 20px;
      }
      & button {
        background: $Hdark;
        color: white;
        font-size: 16px;
        border: none;
        outline: none;
        align-self: flex-end;
        border-radius: 3px;
        padding: 12px 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
.checkoutModel {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  & .modelBg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
  & .checkoutCard {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 280px;
    background: white;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px;
    z-index: 100;
    & h3 {
      font-size: 24px;
      margin-bottom: 15px;
    }
    & label {
      display: block;
      font-size: 14px;
      margin: 20px 0 10px 0;
    }
    & input {
      width: 100%;
      height: 38px;
      border-radius: 4px;
      border: 1px solid #cbd5e0;
      outline: none;
      padding: 0 15px;
    }
    & .tips {
      color: $Hred;
      font-size: 14px;
    }
    & .btn {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      & button {
        background: $Hgray;
        border: none;
        outline: none;
        border-radius: 4px;
        padding: 10px 20px;
        &:hover {
          cursor: pointer;
        }
      }
      & button[type="submit"] {
        background: $Hdark;
        color: white;
      }
    }
    & .checkSuccess {
      text-align: center;
      padding: 20px 0;
      & i {
        color: $Hgreen;
        margin-bottom: 10px;
      }
      & h3 {
        margin-bottom: 30px;
      }
      & button {
        border: none;
        outline: none;
        border-radius: 4px;
        padding: 10px 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    & .checkFail {
      text-align: center;
      padding: 20px 0;
      & i {
        color: $Hred;
        margin-bottom: 10px;
      }
      & p {
        font-size: 14px;
        margin-bottom: 30px;
      }
      & button {
        border: none;
        outline: none;
        border-radius: 4px;
        padding: 10px 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
