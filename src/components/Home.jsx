/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  Statistic, Row, Col, Progress, notification,
} from 'antd';
import { getRegions, getUserCountryCodeFromIp, getLatestDataSummary } from './Actions';

export default function Home() {
  const [userDataSummary, setUserDataSummary] = useState(null);
  useEffect(() => {
    let countrycodes = []; // object countrycode:api key
    let latestDataSummary = [];
    let userCountryCode = 'CHN';

    function getUserDataSummary() {
      setUserDataSummary(latestDataSummary.regions[countrycodes[userCountryCode]]);
    }

    getRegions()
      .then((res) => { countrycodes = res; });
    getUserCountryCodeFromIp()
      .then((res) => { userCountryCode = res; return getLatestDataSummary(); })
      .then((res2) => { latestDataSummary = res2; })
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

  return (userDataSummary && (
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
  )) || (<h1>Loading</h1>);
}
