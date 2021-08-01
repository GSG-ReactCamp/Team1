/* eslint-disable linebreak-style */
import React from 'react';
import { Image, Row, Col } from 'antd';
import * as img1 from './assest/Frame_1.png';
import * as img2 from './assest/Frame_2.png';
import * as img3 from './assest/Frame_3.png';
import * as img4 from './assest/Frame_4.png';

export default function Education() {
  // eslint-disable-next-line no-console
  const width = 105;
  return (
    <>
      <Row>
        <Col span={12}>
          <Image
            width={width}
            src={img1.default}
          />
        </Col>
        <Col span={12}>
          <h1>
            Wear a facemask
          </h1>
          <h3>
            You should wear facemask when you are around other people.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Image
            width={width}
            src={img2.default}
          />

        </Col>
        <Col span={12}>
          <h1>
            Clean your hands often

          </h1>
          <h3>
            Wash hands often with soap and water for at least 20s .

          </h3>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Image
            width={width}
            src={img3.default}
          />

        </Col>
        <Col span={12}>
          <h1>
            Avoid touching your face

          </h1>
          <h3>
            Hands touch many surfaces and can pick up viruses .

          </h3>

        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Image
            width={width}
            src={img4.default}
          />

        </Col>
        <Col span={12}>
          <h1>
            Avoid close contact

          </h1>
          <h3>
            put distance between yourself and other people.

          </h3>
        </Col>
      </Row>
    </>
  );
}
