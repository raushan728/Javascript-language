async function raushan() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 2000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg");
    }, 5000);
  });

  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)
  console.log("Fetching Delhi Weather Please wait ...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather: " + delhiW);
  console.log("Fetching Bangalore Weather Please wait ...");
  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather: " + bangaloreW);
  return [delhiW, bangaloreW];
}

const rahul = async () => {
  console.log("Hey I am cherry and I am waiting ");
};

const main1 = async () => {
  console.log("Welcome to weather control room");
  let a = await raushan();
  let b = await rahul();
};
main1();
