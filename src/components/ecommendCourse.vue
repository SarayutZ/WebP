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
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
{
    name:"",
    imagesCourse:"",
    Learnlink:""
},
  
  ]);
  </script>

  <style>
  @import url("https://fonts.googleapis.com/css2?family=K2D:wght@200&display=swap");
  * {
    font-family: "K2D", sans-serif;
  }
  </style>
