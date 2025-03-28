import { UpcomingEvents , DealsChart} from "@/components";
import { Row , Col } from "antd";

export const Home = () => {
  return (
    <div>
      <Row
        gutter={[32,32]}
        style={{
          margin: "33px"
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px"
          }}
        >
          <UpcomingEvents/>
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px"
          }}
        >
          <DealsChart/>
        </Col>
      </Row>
    </div>
  )
};

export default Home;
