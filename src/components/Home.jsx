/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  Statistic, Row, Col, Progress, notification,
} from 'antd';

export default function Home() {
  const [userDataSummary, setUserDataSummary] = useState(null);

  useEffect(() => {
    let userCountryCode = 'CHN';
    const countrycodes = []; // object countrycode:api key
    let latestDataSummary = [];

    function getUserCountryCodeFromIp() {
      const url = 'https://get.geojs.io/v1/ip/country.json';
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          userCountryCode = data.country;
          return userCountryCode;
        });
    }
    function getLatestDataSummary() {
      const url = 'https://api.quarantine.country/api/v1/summary/latest';
      return fetch(url)
        .then((res) => res.json())
        .then((res2) => {
          latestDataSummary = res2.data;
          return latestDataSummary;
        });
    }

    function getRegions() {
      const url = 'https://api.quarantine.country/api/v1/regions';
      fetch(url)
        .then((res) => res.json())
        .then((res2) => res2.data.forEach((element) => {
          countrycodes[element.iso3166a2] = element.key;
        }))
        .then(() => {
          countrycodes.PS = 'palestine';
        });
    }
    function getUserDataSummary() {
      setUserDataSummary(latestDataSummary.regions[countrycodes[userCountryCode]]);
    }

    getRegions();
    getUserCountryCodeFromIp()
      .then(getLatestDataSummary)
      .then(getUserDataSummary)
      .catch(() => {
        notification.open({
          message: 'Error',
          description:
            'It seems that your connection is unstable. Try Uses Search Page',
        });
      });
    return () => {};
  }, []);

  return userDataSummary && (
    <div style={{ textAlign: 'center' }}>
      <h1>
        People of
        {' '}
        {userDataSummary.name}
      </h1>
      <h1>
        You Are Welcome
      </h1>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cases" value={userDataSummary.total_cases} />
        </Col>
        <Col span={12}>
          <Statistic title="Active Cases" value={userDataSummary.active_cases} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic title="Deaths" value={userDataSummary.deaths} />
        </Col>
        <Col span={12}>
          <Statistic title="Recoverd" value={userDataSummary.recovered} />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Progress type="circle" percent={(Math.floor(userDataSummary.death_ratio * 1000) / 10)} strokeColor="#ff4f51" />
        </Col>
        <Col span={12}>
          <Progress type="circle" percent={(Math.floor(userDataSummary.recovery_ratio * 1000) / 10)} strokeColor="#52c41a" />
        </Col>
      </Row>

    </div>
  );
}
