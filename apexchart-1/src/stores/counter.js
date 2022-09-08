import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  let newData = ref([]);
  let years = ref([]);
  let loaded = ref(false)


  async function getData() {
    loaded.value = false
    try {
      const cryptocurrency = await axios.get(
        "https://api.coinlore.net/api/tickers/ "
      );
      console.log(cryptocurrency);
      const { data } = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      console.log(data);
      const popData = await data.data;
      console.log(popData);
      await popData.forEach((d) => {
        const year = d["Year"];
        const { Population } = d;
        years.value.push(year);
        newData.value.push(Population);
      });
      years.value.reverse();
      console.log(years._rawValue);
      newData.value.reverse();
      loaded.value = true
    } catch (e) {
      console.log(e);
    }
  }

  onBeforeMount(() => {
    getData();
  });

  return { newData, years, loaded };
});
