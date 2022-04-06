/* eslint-disable */
<template>
  <div v-if="result" class="Weather">
    <header>
      <p>
        <b>El clima en {{ result.name }}</b>
      </p>
    </header>
    <img
      :src="
        'http://openweathermap.org/img/w/' + result.weather[0].icon + '.png'
      "
      alt=""
    />
    <p><b>Description:</b> {{ result.weather[0].description }}</p>
    <p><b>Temp: </b>{{ result.main.temp }}</p>
    <p><b>Degrees:</b> {{ result.wind.deg }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null,
  }),
  created() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=playa%20del%20carmen&APPID=606a7dce5678b1dcff7e5c15e138882b"
      )
      .then((result) => {
        this.result = result.data;
        console.log(result.data);
      });
  },
};
</script>
