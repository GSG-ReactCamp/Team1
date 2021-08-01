/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  Statistic, Row, Col, Progress, Select, notification,
} from 'antd';

import { getLatestDataSummary, getCountryNames } from './Actions';

const { Option } = Select;

export default function Search() {
  const [countryNames, setCountryNames] = useState(null);
  const [latestDataSummary, setLatestDataSummary] = useState(null);
  const [options, setOptions] = useState([]);
  const [countryData, setCountryData] = useState(null);

  function getOptions(dataObj) {
    const obj = Object.entries(dataObj);
    return [...obj.map((i) => <Option key={i[1]} value={i[1]}>{i[0]}</Option>)];
  }

  useEffect(() => {
    getLatestDataSummary()
      .then((res) => { setLatestDataSummary({ ...res }); })
      .then(() => getCountryNames(latestDataSummary))
      .then((res) => {
        const array = getOptions(res);
        setOptions(array);
        setCountryNames({ ...res });
      })
      .catch(() => {
        notification.open({
          message: 'Error',
          description:
            'It seems that your connection is unstable. Try again later',
        });
      });
    return () => {};
  }, []);

  function onChange(value) {
    const data = latestDataSummary.regions[value] ? latestDataSummary.regions[value] : null;
    // live fetching will be supported soon for countries like china
    setCountryData({ ...data });
  }

  return (
    <>
      {countryNames && (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a Country"
        optionFilterProp="children"
        onChange={onChange}
        // eslint-disable-next-line max-len
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {options}
      </Select>
      )}
      {countryData && (
      <div style={{ textAlign: 'center' }}>
        <Row>
          <Col span={12}>
            <Statistic title="Total Cases" value={countryData.total_cases} />
          </Col>
          <Col span={12}>
            <Statistic title="Active Cases" value={countryData.active_cases} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Statistic title="Deaths" value={countryData.deaths} />
          </Col>
          <Col span={12}>
            <Statistic title="Recoverd" value={countryData.recovered} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Progress type="circle" percent={(Math.floor(countryData.death_ratio * 1000) / 10)} strokeColor="#ff4f51" />
          </Col>
          <Col span={12}>
            <Progress type="circle" percent={(Math.floor(countryData.recovery_ratio * 1000) / 10)} strokeColor="#52c41a" />
          </Col>
        </Row>

      </div>
      )}
    </>
  );
}
