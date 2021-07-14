const axios = require("axios");

module.exports = async function (context) {
  let address = "";
  let data = await axios.get(
    `https://run.mocky.io/v3/32a1f383-ef51-44ea-ba3d-2a39e62e1592/${context.bindings.name}`
  );

  if (data) {
    address = data.adress;
  } else {
    throw Error("error llamando la API");
  }

  return address;
};
