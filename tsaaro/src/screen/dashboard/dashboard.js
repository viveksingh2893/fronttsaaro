import { Row, Col } from "antd";
import DashboardTck from "../../component/dashboard/dashticket";

const DashboardScr = () => {
  return (
    <Row style={{width:'100vw'}}> 
      <Col>
        <Row>
          <DashboardTck name="cookie" number="2000" total="Total Cookies" />
          <DashboardTck
            name="categories"
            number="2000"
            total="Total Categories"
          />
        </Row>
        <Row>
          <DashboardTck name="script" number="2000" total="Total Scripts" />
          <DashboardTck name="scan" number="2000" total="Pages Scanned" />
        </Row>
      </Col>
      <Col>
        <div className="dashboard-big-tck"></div>
      </Col>
    </Row>
  );
};

export default DashboardScr;
