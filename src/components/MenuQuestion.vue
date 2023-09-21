<template>
<div class="container">
    <div class="border p-3 shadow-sm d-flex justify-content-center">
        <ul class="nav text-secondary">
            <li class="p-2 g-col-6 text-dark " v-for="(item, index) in topic" :key="index">
                <a>{{ item.name }}</a>
            </li>
        </ul>
    </div>
</div>
</template>
  
<script setup>
import { ref } from "vue";
const topic = ref([
  { name: 'ทำไมการเงินถึงสำคัญ?'},
  { name: 'ทำไมต้องออม?'},
  { name: 'สิ่งที่ควรพิจารณาเมื่อเริ่มออมเงิน?'},
  { name: 'ควรจะออมเงินทางไหน?'},
  { name: 'การจัดการหนี้คืออะไร?'},]);
</script>

<style >

</style>