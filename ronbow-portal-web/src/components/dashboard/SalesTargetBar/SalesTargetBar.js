import React from "react";
import { Progress, Row, Col } from "antd";
import "./SalesTargetBar.css";

const CustomProgressBar = ({ sales, target, elapsedDays, totalDays }) => {
  const salesPercentage = (sales / target) * 100;
  const timePercentage = (elapsedDays / totalDays) * 100;

  return (
    <div className="progress-container">
      <Row align="middle">
        <Col span={24}>
          <Progress
            percent={salesPercentage}
            showInfo={false}
            strokeColor="#5D6465"
            trailColor="#F0ECEC"
          />
          <div
            className="elapsed-time-marker"
            style={{ left: `calc(${timePercentage}% - 2px)` }}
          />
        </Col>
      </Row>
      <Row justify="space-between" align="bottom">
        <Col>
          <span className="label">${sales} Received</span>
        </Col>
        <Col>
          <span className="label">${target} Target</span>
        </Col>
      </Row>
    </div>
  );
};

export default CustomProgressBar;
