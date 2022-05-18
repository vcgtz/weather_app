const axios = require('axios').default;

const getLocationByIPAddress = async (ip) => {
  try {
    const response = await axios.get(`${process.env.IPSTACK_URL}/${ip}?access_key=${process.env.IPSTACK_API_KEY}`);

    if (response.status !== 200) {
      throw new Error(`Status Code: ${response.status}. ${response.statusText}`);
    }

    return response.data;
  } catch (err) {
    console.err(err);
  }
};

module.exports = {
  getLocationByIPAddress,
};
