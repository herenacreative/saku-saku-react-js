import { React, useHistory } from "libraries";
import { Row, Col, Space, Avatar, Typography, Button } from 'antd';
import '../../../assets/scss/main.scss';
import { imgland1, gplay, appstore } from 'assets';
import style from "../homes.module.scss";

const { Title, Text } = Typography;

const Row1 = () => {
  const history = useHistory()

  return (
    <>
      <Row className="main__auth">
        {/* left content 1 */}
        <Col flex="1 1" className={style.left__content}>
          <Title level={2} className={style.font__title}>
            Saku Saku
          </Title>
          <img src={imgland1} className={style.img__1} />
        </Col>

        {/* right content 1  */}
        <Col flex="1 1" className={style.right__content}>
          <div className={style.btn__top}>
            <Button className={style.btn__light} onClick={() => history.push('/auth/login')}>
              Login
            </Button>
            <Button className={style.btn__primary} onClick={() => history.push('/auth/sign-up')}>
              Sign Up
            </Button>
          </div>
          
          <div className={style.text__}>
            <div className={style.m__30}>
              <Title className={style.width__}>
                Awesome App For Saving <span className={style.font__title}>Time.</span>
              </Title>
            </div>
            <div className={style.width__}>
              <Text type="secondary">
                We bring you a mobile app for banking problems that
                oftenly wasting much of your times.
              </Text>
            </div>
          </div>
          <Button onClick={() => history.push('#')} className={style.btn__primary} >
            Try It Free
          </Button>
          <div className={style.icons__}>
            <Title level={5}> Available on</Title>
            <Space direction="horizontal">
              <Avatar shape="square" src={gplay} />
              <Avatar shape="square" src={appstore} />
            </Space>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Row1