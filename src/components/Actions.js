/* eslint-disable linebreak-style */
function getUserCountryCodeFromIp() {
  let userCountryCode = 'CHN';
  const url = 'https://get.geojs.io/v1/ip/country.json';
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userCountryCode = data.country;
      return userCountryCode;
    });
}
function getLatestDataSummary() {
  let latestDataSummary = [];
  const url = 'https://api.quarantine.country/api/v1/summary/latest';
  return fetch(url)
    .then((res) => res.json())
    .then((res2) => {
      latestDataSummary = res2.data;
      return latestDataSummary;
    });
}

function getRegions() {
  const countrycodes = [];
  const url = 'https://api.quarantine.country/api/v1/regions';
  return fetch(url)
    .then((res) => res.json())
    .then((res2) => res2.data.forEach((element) => {
      countrycodes[element.iso3166a2] = element.key;
    }))
    .then(() => {
      countrycodes.PS = 'palestine';
      return countrycodes;
    });
}

export { getUserCountryCodeFromIp, getRegions, getLatestDataSummary };
