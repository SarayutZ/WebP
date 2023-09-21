<template>
    <div class="head text-center mt-4">
      <h3 class="fw-bold">แนะนำคอร์ส ฟรี</h3>
    </div>
  
    <div class="container text-center">
      <div class="row">
        <div class="col mt-5" v-for="(Course, index) in ShopBook" :key="index">
          <div style="width: 18rem">
            <img
              :src="Course.imagesCourse"
              class="card-img-top"
              :width="sizeW"
              :height="sizeH"
            />
            <div class="card-body">
              <h5 class="card-title mt-4">{{ Course.name }}</h5>
  
              <a :href="Course.Learnlink" target="_blank">
                <button
                  class="btn mt-3 rounded-pill w-50"
                  style="background-color: #3B48BD; color: white; opacity: 0.5"
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
  const sizeW = 450;
  const sizeH = 200;
  const ShopBook = ref([
    
    {
      name:"มือใหม่หัดลงทุน Digital Asset",
      imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/041122095300-Thumbnail-Digital-Asset-480x270px.png",
      Learnlink:"https://elearning.set.or.th/SETGroup/courses/861/info"
    },
{
    name:"เป็นหนี้แล้วจัดการยังไง",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/161022111437-Thumbnail_EP2_%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/819/info"
},
{
    name:"เงินทองต้องวางแผน",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/130819031109-WMD1001.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/182/info"
    
},
{
    name:"วางแผนการเงินหลังเกษียณ สไตล์วัยเก๋า",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/300819091702-WMD1202.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/193/info"
},
{
    name:"วางแผนเกษียณ สไตล์มนุษย์เงินเดือน",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/130819073006-WMD1201.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/183/info"
},
{
    name:"หลักการลงทุน",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/220218061908-INV101.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/15/info"
},
{
    name:"การลงทุนในหุ้น",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/210918134729-inv102_cover.jpg",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/16/info"
},
{
    name:"การกำหนดเป้าหมายการพัฒนาที่ยั่งยืนของธุรกิจ",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062003-shutterstock_557079442-resize_S01.jpg",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/271/info"
},
{
    name:"การวิเคราะห์ห่วงโซ่คุณค่าและผู้มีส่วนได้เสีย",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062028-shutterstock_562244602-resize_S02.jpg",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/272/info"
},
{
    name:"การกำหนดกลยุทธ์และวิธีการดำเนินงานด้านความยั่งยืนขององค์กร",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062051-shutterstock_564043102-resize_S03.jpg",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/273/info"
},
{
    name:"เศรษฐกิจหมุนเวียน หรือ Circular Economy",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/090123012205-Banner%20e-learning%20%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%20Thai%20LiveStream_Circular%20Economy_480x270%20px.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/901/info"
},
{
    name:"พื้นฐานด้านความยั่งยืนของธุรกิจ",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/181220062106-shutterstock_523767853-resize.jpg",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/174/info"
},
{
    name:"วางแผนภาษี สไตล์มนุษย์เงินออม",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/300819070849-WMD1501.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/192/info"
},
{
    name:"ลงทุนตราสารหนี้ฉบับมือใหม่",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/060219111506-DBD1001.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/124/info"
},
{
    name:"ลงทุนหุ้นมั่นใจ ต้องเข้าใจกราฟเทคนิค",
    imagesCourse:"https://elearning.set.or.th/_c_/data-file/assets/courses/thumbnail/EQD1103_1.png",
    Learnlink:"https://elearning.set.or.th/SETGroup/courses/30/info"
},
  
  ]);
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=K2D:wght@200&display=swap");
  * {
    font-family: "K2D", sans-serif;
  }
  </style>
  