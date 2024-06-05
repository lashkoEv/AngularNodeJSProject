const axios = require('axios');
const apiKey = '99552500cc2fb49ecf5305467bbe8f01';
async function getNovaPoshtaOffices(req, res) {
  try {
    const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: apiKey,
      modelName: 'AddressGeneral',
      calledMethod: 'getWarehouses',
      methodProperties: {},
    });

    if (response.data.success) {
      const offices = response.data.data;
      console.log(offices);
      return res.send(offices);
    } else {
      console.error(
        'Произошла ошибка при получении списка отделений:',
        response.data.errors
      );
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

module.exports = {
  getNovaPoshtaOffices,
};
