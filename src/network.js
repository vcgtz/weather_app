const axios = require('axios').default;

const getMyPublicIPAddress = async () => {
  try {
    const response = await axios.get(process.env.IPIFY_URL);

    if (response.status !== 200) {
        throw new Error(`Status Code: ${response.status}. ${response.statusText}`);
    }

    return response.data.ip;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getMyPublicIPAddress,
};
