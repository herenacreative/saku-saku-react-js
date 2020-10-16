import { React } from "libraries";
import { Row, Col, Typography } from 'antd';
import '../../../assets/scss/main.scss';
import { imgland2 } from 'assets';
import style from "../homes.module.scss";

const { Title, Text } = Typography;

const Row1 = () => {
  return (
    <>
      <Row className={style.main__}>
        {/* left content 1 */}
        <Col flex="1 1" className={style.left__content}>
          <img src={imgland2} className={style.img__1} />
        </Col>

        {/* right content 1  */}
        <Col flex="1 1" className={style.right__content}>
          <div className={style.m__10}>
            <Title>
              All The <span className={style.font__title}>Great </span> 
              Zwallet Features.
            </Title>
          <div className = {style.cards}>
            <Title level={5}>
              1. Small Fee
            </Title>
            <Text>
              We only charge 5% of every 
              success transaction done in Zwallet app.
            </Text>
          </div>
          <div className = {style.cards}>
            <Title level={5}>
              2. Data Secured
            </Title>
            <Text>
              All your data is secured
              properly in our system and it’s encrypted.
            </Text>
          </div>
          <div className = {style.cards}>
            <Title level={5}>
              2. User Friendly
            </Title>
            <Text>
              Zwallet come up with modern 
              and sleek design and not complicated.
            </Text>
          </div>

          </div>
        </Col>
      </Row>
    </>
  )
}

export default Row1