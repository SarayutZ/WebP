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
    name:"คิดแล้ว..ต้องรวย : Think and Grow Rich",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/603/9786166039238L.jpg?h=eb9d05b4bd8ce4b5b0e4ef119f5bad62",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-Think-and-Grow-Rich/9786166039238"
  },
  {
    name:"เงิน มา ง่าย ๆ",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789370L.jpg?h=d5440c8a9c9196988b2da0ccea7058bf",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-%E0%B8%A1%E0%B8%B2-%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%86/9786165789370"
  },
  {
    name:"วิธีสร้างกำไรในตลาดหุ้น : How to Profit in the Stock Market",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/434/9786164343580L.jpg?h=a955b214ce296b14da95f6b649bb5c22",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-How-to-Profit-in-the-Stock-Market/9786164343580"
  },
  {
    name:"ศาสตร์แห่งบัฟเฟตต์ : Buffettology",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/601/9786166011432L.jpg?h=a93d4f37d38e5482889c91b598381ee2",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-Buffettology/9786166011432"
  },
  {
    name:"บล็อกเชนเข้าใจง่าย",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187586L.jpg?h=6b78d5b030cfdbc753b94cb30d72d209",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%9A%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%8A%E0%B8%99%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2/9786168187586"
  },
  {
    name:"7 เคล็ดลับการลงทุนแบบวอร์เรน บัฟเฟ็ตต์ : 7 Secrets to Investing Like Warren Buffett",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/388/9786163886743L.jpg?h=d905f31079fbaf69b6d25ed969854180",
    Shoplink:"https://m.se-ed.com/Detail/7-%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B9%87%E0%B8%95%E0%B8%95%E0%B9%8C-7-Secrets-to-Investing-Like-Warren-Buffett/9786163886743"
  },
  {
    name:"7 ลูกค้าที่สร้างเงินล้านให้คุณ",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789233L.jpg?h=a59b6974ad677c96b16c44e958ef5c06",
    Shoplink:"https://m.se-ed.com/Detail/7-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B8%E0%B8%93/9786165789233"
  },
  {
    name:"รวยและรอดด้วยกราฟเทคนิค (New Edition)",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/430/9786164304420L.jpg?h=8e341d42e32715410ba6398aa9e9cf25",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A3%E0%B8%AD%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%97%E0%B8%84%E0%B8%99%E0%B8%B4%E0%B8%84-(New-Edition)/9786164304420"
  },
  {
    name:"The Sniper Trade วิธีเทรดแบบ Sniper ทำกำไรหลักล้าน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169378372L.jpg?h=7135d053e0099b3441706a1f85fd6a09",
    Shoplink:"https://m.se-ed.com/Detail/The-Sniper-Trade-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%81%E0%B8%9A%E0%B8%9A-Sniper-%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/9786169378372"
  },
  {
    name:"คู่มือลงทุนคริปโทเคอร์เรนซีฉบับครบครัน : Cryptocurrency Investing For Dummies",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/449/9786164494190L.jpg?h=33e8ce55eaab64cf3a0411025d4982fe",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B9%82%E0%B8%97%E0%B9%80%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%8B%E0%B8%B5%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%99-Cryptocurrency-Investing-For-Dummies/9786164494190"
  },
  {
    name:"พิชิตตลาด Forex ด้วยกราฟเปล่า",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789035L.jpg?h=6780912578915f1e6273287f8bdd1952",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%9E%E0%B8%B4%E0%B8%8A%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94-Forex-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%B2/9786165789035"
  },
  {
    name:"Swing Trade Game กลยุทธ์ทำกำไรหุ้นด้วย Swing Trade",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165789134L.jpg?h=8320162558071135c5c8ebf382100081",
    Shoplink:"https://m.se-ed.com/Detail/Swing-Trade-Game-%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-Swing-Trade/9786165789134"
  },
  {
    name:"อัจฉริยะวิธีสร้างตัวให้รวยสิบล้าน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/885973/541/8859735412693L.jpg?h=1f3f4985e149abc9accd45b50f868566",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%AD%E0%B8%B1%E0%B8%88%E0%B8%89%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%B4%E0%B8%9A%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/8859735412693"
  },
  {
    name:"คนจะรวย ช่วยไม่ได้",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/885973/541/8859735412785L.jpg?h=4d4d853ef7fcd7086e67ba4e09f31baa",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%84%E0%B8%99%E0%B8%88%E0%B8%B0%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89/8859735412785"
  },
  {
    name:"Mindset Secrets for Winning : ถอดความคิดเทรดเดอร์ผู้ชนะ",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/942/9786169420002L.jpg?h=1b88a424e75bcf40db69080b247662d5",
    Shoplink:"https://m.se-ed.com/Detail/Mindset-Secrets-for-Winning-%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%99%E0%B8%B0/9786169420002"
  },
  {
    name:"เพาะหุ้นเป็น เห็นผลยั่งยืน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/601/9786166010145L.jpg?h=19557a7b167d2fc4505b7a7d0799b2be",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%9C%E0%B8%A5%E0%B8%A2%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B7%E0%B8%99/9786166010145"
  },
  {
    name:"Super Easy เล่นหุ้น Online ฉบับอ่านง่ายเป็นเร็ว",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/381/9786163813480L.jpg?h=22c83c1cb9f54466971d53e790ca964d",
    Shoplink:"https://m.se-ed.com/Detail/Super-Easy-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-Online-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7/9786163813480"
  },
  {
    name:"ลงทุนหุ้นเติบโต 101 Investing in Growth Stock 101",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165788540L.jpg?h=2761982f2b95e70140958e13c4d74339",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95-101-Investing-in-Growth-Stock-101/9786165788540"
  },
  {
    name:"เปลี่ยนหนี้เป็นกลยุทธ์สร้างเงินล้าน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165788267L.jpg?h=aa27f6a526bf81cff7b46ce34fc8f554",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99/9786165788267"
  },
  {
    name:"เทรด Forex ให้ถูกวิธี ทำรายได้เพิ่มเป็น 100 เท่า 100 วิธีชนะ Forex ด้วย Graph และ Mind Mapping (ปรับปรุงใหม่)",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/275/9786162759987L.jpg?h=cccc6906f181ac495828d011e8d810a0",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Forex-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%96%E0%B8%B9%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-%E0%B8%97%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-100-%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2-100-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%8A%E0%B8%99%E0%B8%B0-Forex-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-Graph-%E0%B9%81%E0%B8%A5%E0%B8%B0-Mind-Mapping-(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)/9786162759987"
  },
  {
    name:"Forex Science เพื่อประสบการณ์ที่ดีในการเทรด Forex ของคุณ",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/210/9786162106170L.jpg?h=d7df27e63eba9246464eb2f9a04d857a",
    Shoplink:"https://m.se-ed.com/Detail/Forex-Science-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94-Forex-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93/9786162106170"
  },
  {
    name:"งบการเงินหุ้นที่คุณต้องอ่าน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/937/9786169376569L.jpg?h=fe31944625bdbb5b5408ce4509f73c84",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99/9786169376569"
  },
  {
    name:"จัดการเงินดี เงินก็ไม่หนี ไปหาคนอื่น",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/941/9786169414216L.jpg?h=5a1368f598c4176a2755c99ceebd0b3e",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B8%B5-%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B9%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AB%E0%B8%99%E0%B8%B5-%E0%B9%84%E0%B8%9B%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%99%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99/9786169414216"
  },
  {
    name:"The Laws of Wealth มั่งคั่งด้วยกฎแห่งการลงทุน",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187579L.jpg?h=a56cf491cf9577aee21c78ee1431c667",
    Shoplink:"https://m.se-ed.com/Detail/The-Laws-of-Wealth-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%8E%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99/9786168187579"
  },
  {
    name:"Money Mastery มั่งคั่งทั้งชีวิต",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/822/9786168224434L.jpg?h=943bec0d4115035c515da60396efe0e1",
    Shoplink:"https://m.se-ed.com/Detail/Money-Mastery-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95/9786168224434"
  },
  {
    name:"เลือกที่จะรวย",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160845767L.jpg?h=7a8f975a2bf18d87637a6d0125132871",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%B0%E0%B8%A3%E0%B8%A7%E0%B8%A2/9786160845767"
  },
  {
    name:"ไล่ล่าหา หุ้นเด็ด",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/578/9786165787871L.jpg?h=b18421aff2068916183a26a1664a53fa",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B9%84%E0%B8%A5%E0%B9%88%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AB%E0%B8%B2-%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94/9786165787871"
  },
  {
    name:"มือใหม่เข้าใจการเงิน : Money for Beginners",
    imagesBooks:"https://images-se-ed.com/ws/Storage/Originals/978616/818/9786168187531L.jpg?h=335c7425236dba2249fe1495d24eee18",
    Shoplink:"https://m.se-ed.com/Detail/%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-Money-for-Beginners/9786168187531"
  },



]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=K2D:wght@200&display=swap");
* {
  font-family: "K2D", sans-serif;
}
</style>
