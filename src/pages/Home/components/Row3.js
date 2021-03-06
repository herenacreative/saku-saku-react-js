import { React } from "libraries";
import { Space, Typography, Avatar } from 'antd';
import '../../../assets/scss/main.scss';
import { iphone2, ikey, idown } from 'assets'
import style from "../homes.module.scss";

const {Title, Text} = Typography;

const Row3 = () => {
  return (
    <>
      <div className={style.main__auth}>
        <Title className={style.text__ac}><span className={style.font__title}>About</span> the Application.</Title>
        <p className={style.text__ac}>
          We have some great features from 
          the application and it’s totally free 
          to use by all users around the world.
        </p>
        <div className={style.m__10}>
          <Space direction="horizontal" className={style.vertical__}>
              <Space direction="vertical" align="center">
                <Avatar src={iphone2} size={70}/>
                <Title level={5}>24/7 Support</Title>
                <div className={style.text__ac}>
                  <Text>
                    We have 24/7 contact support 
                    so you can contact us whenever 
                    you want and we will respond it.
                  </Text>
                </div>
              </Space>
              <Space direction="vertical" align="center" className={style.cards}>
                <Avatar src={ikey} size={70}/>
                <Title level={5}>Data Privacy</Title>
                <div className={style.text__ac}>
                <Text>
                  We make sure your data is safe in our 
                  database and we will 
                  encrypt any data you submitted to us.
                </Text>
                </div>
              </Space>
              <Space direction="vertical" align="center">
                <Avatar src={idown} size={70}/>
                <Title level={5}>Easy Download</Title>
                <div className={style.text__ac}>
                  <Text>
                    Zwallet is 100% totally free to use
                    it’s now available
                    on Google Play Store and App Store.
                </Text>
                </div>
              </Space>
          </Space>
        </div>
      </div>
    </>
  )
}

export default Row3