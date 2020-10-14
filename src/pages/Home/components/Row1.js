import { React, Link, useHistory } from "libraries";
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
        <Col flex="1 1">
          <div className={style.btn__top}>
            <Button className={style.btn__light} onClick={() => history.push('/auth/login')}>
              Login
            </Button>
            <Button className={style.btn__primary} onClick={() => history.push('/auth/sign-up')}>
              Sign Up
            </Button>
          </div>
          
          <div className={style.m__30}>
            <Title className="font__large">
              Awesome App
              For Saving Time.
            </Title>
          </div>
          <div className="m__30" style={{ width: '330px' }}>
            <Text type="secondary">
              We bring you a mobile app for banking problems that
              oftenly wasting much of your times.
            </Text>
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