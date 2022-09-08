<script setup>
import { ref, reactive } from "vue";
import { useCryptoStore } from "../stores/crypto-store";

const store = useCryptoStore();

const series = ref([
  {
    data: store.seriesData,
  },
]);
const chartOptions = reactive({
  chart: {
    type: "bar",
    height: 380,
  },
  plotOptions: {
    bar: {
      barHeight: "100%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"],
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#000"],
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
    
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    categories: store.categData,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  
  tooltip: {
    theme: "light",
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
});
</script>

<template>
  <h1>Cryptocurrency prices (USD)</h1>
  <div id="chart">
    <apexchart
      type="bar"
      height="400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
#chart {
  width: 70vw;
}
</style>
