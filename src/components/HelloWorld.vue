<script setup>
import {ref, reactive} from 'vue';
import {useCounterStore} from '../stores/counter'

let store = useCounterStore()
let series = ref([{
              name: "Population",
              data: store.newData.reverse()
          }]);
let chartOptions = reactive({
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
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
              categories: store.years.reverse(),
            }
          });
</script>

<template>
  <h1>Bar Chart</h1>

  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped></style>
