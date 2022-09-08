import axios from "axios";
import { defineStore } from "pinia";
import { onBeforeMount, ref } from "vue";

export const useCryptoStore = defineStore("crypto", () => {
  const categData = ref([]);
  const seriesData = ref([]);
  let loaded = ref(false);

  async function getData() {
    loaded.value = false;
    try {
      const { data } = await axios.get("https://api.coinlore.net/api/tickers/");
      const cryptoData = await data.data;
      for (let i = 0; i < 5; i++) {
        categData.value.push(cryptoData[i]["name"]);
        seriesData.value.push(cryptoData[i]["price_usd"]);
      }
      loaded.value = true;
    } catch (e) {
      console.error(e);
    }
  }

  onBeforeMount(() => {
    getData();
  });

  return {
    categData,
    seriesData,
    loaded,
  };
});
