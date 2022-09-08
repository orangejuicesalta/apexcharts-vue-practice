<script setup>
import {ref, reactive} from 'vue';
import {useCounterStore} from '../stores/counter'

let store = useCounterStore();
const seriesData = ref(store.newData)
const catData = ref(store.years)
let series = ref([{
              name: "Population",
              data: seriesData.value
          }]);
let chartOptions = reactive({
            chart: {
              height: 350,
              type: 'line',
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'US Population over years',
              align: 'center'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: catData.value,
              title: {
                text: 'Year'
              }
            },
            yaxis: {
              title: {
                text: 'Population Number'
              }
          }});
</script>

<template>
  <h1>Bar Chart</h1>

  <div id="chart" v-if="store.loaded">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped></style>
