<template>
  <div class="head text-center mt-4">
    <h3 class="fw-bold">หนังสือ การเงิน / การลงทุน</h3>
  </div>

  <div class="container text-center">
    <div class="row">
      <div class="col mt-5" v-for="(Books, index) in ShopBook" :key="index">
        <div style="width: 18rem">
          <img
            :src="Books.imagesBooks"
            class="card-img-top"
            :width="sizeW"
            :height="sizeH"
          />
          <div class="card-body">
            <h5 class="card-title mt-4">{{ Books.name }}</h5>

            <a :href="Books.Shoplink" target="_blank">
              <button
                class="btn mt-3 rounded-pill w-50"
                style="background-color: #42ab28; color: white; opacity: 0.5"
              >
                ดูรายละเอียด
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const sizeW = 350;
const sizeH = 400;
const ShopBook = ref([
  {
    name: "พ่อรวยสอนลูก",
    imagesBooks:
      "https://images-se-ed.com/ws/Storage/Originals/978616/081/9786160814077L.jpg?h=3cf4fb0b3b6d5c892e33f462ff5d709d",
    Shoplink:
      "https://m.se-ed.com/Detail/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81-Rich-Dad-Poor-Dad/9786160814077",
  },

  {
    name:"Money 101",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/085/9786160850396L.jpg?h=c8564d753dd8d3b22aee7df8dfc0817f",
    Shoplink:"https://m.se-ed.com/Detail/Money-101-(%E0%B8%9B%E0%B8%81%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99)/9786160850396"
  },
  {
    name:"เศรษฐีชี้ทางรวย ฉบับปกแข็ง ",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160849000L.jpg?h=9837c1366798bc48640e998be2698082",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-(The-Richest-Man-in-Babylon-Millionaire-s-Edition)/9786160849000"
  },
  {
    name:"บริหารเงินล้านหลังเกษียณ ให้มีเงินใช้ทุกเดือน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789226L.jpg?h=9aed9d07ebd2d5209bfa26122c163d79",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%B5%E0%B8%A2%E0%B8%93-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99/9786165789226"
  },
  {
    name:"",
    imagesBooks:"",
    Shoplink:""
  },
  {
    name:"",
    imagesBooks:"",
    Shoplink:""
  },
  {
    name:"",
    imagesBooks:"",
    Shoplink:""
  },
  {
    name:"",
    imagesBooks:"",
    Shoplink:""
  },


]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=K2D:wght@200&display=swap");
* {
  font-family: "K2D", sans-serif;
}
</style>
