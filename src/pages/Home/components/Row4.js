import { React, Link, useHistory } from "libraries";
import { Row, Col, Space, Avatar, Typography, Button, Card } from 'antd';
import '../../../assets/scss/main.scss';
import { imgland1, gplay, appstore, imgland2 } from 'assets';
import style from "../homes.module.scss";

const { Title, Text } = Typography;

const Row1 = () => {
  const history = useHistory()

  return (
    <>
      <Row className="main__auth">
        {/* left content 1 */}
        <Col flex="1 1" className={style.left__content}>
          <img src={imgland2} className={style.img__1} />
        </Col>

        {/* right content 1  */}
        <Col flex="1 1">
          <div className={style.m__30}>
            <Title className="font__large">
              All The Great
              Zwallet Features.
            </Title>
          </div>
          <Card>
            <Title level={5}>
              1. Small Fee
            </Title>
            <Text>
              We only charge 5% of every 
              success transaction done in Zwallet app.
            </Text>
          </Card>
          <Card>
            <Title level={5}>
              2. Data Secured
            </Title>
            <Text>
              All your data is secured
              properly in our system and it’s encrypted.
            </Text>
          </Card>
          <Card>
            <Title level={5}>
              2. User Friendly
            </Title>
            <Text>
              Zwallet come up with modern 
              and sleek design and not complicated.
            </Text>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Row1