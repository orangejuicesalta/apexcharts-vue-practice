import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  let newData = ref([]);
  let years = ref([]);

  async function getData() {
    try {
      const { data } = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      console.log(data)
      const popData = await data.data;
      console.log(popData);
      await popData.forEach((d) => {
        const year = d["Year"];
        console.log(year);
        const { Population } = d;
        years.value.push(year);
        console.log(years._rawValue);
        newData.value.push(Population);
      });
    } catch (e) {
      console.log(e);
    }
  }

  onBeforeMount(() => {
    getData();
  });

  return { newData, years };
});
