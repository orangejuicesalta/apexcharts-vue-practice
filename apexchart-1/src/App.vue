<script setup>
import LineChart from "./components/LineChart.vue";
import BarChart from "./components/BarChart.vue";
</script>

<template>
  <div class="wrapper">
    <LineChart />
    <BarChart />
  </div>
</template>

<style>
.wrapper {
  padding-left: 100px;
}
h1 {
  font-family: "Courier New", Courier, monospace;
}
</style>
