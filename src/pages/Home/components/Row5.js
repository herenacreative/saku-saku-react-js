import { React, useHistory } from "libraries";
import { Space, Typography, Avatar } from 'antd';
import '../../../assets/scss/main.scss';
import { iphone2, ikey, idown } from 'assets'
import style from "../homes.module.scss";

const {Title, Text} = Typography;

const Row3 = () => {
  const history = useHistory()

  return (
    <>
      <Title className={style.text__ac}>
        What Users are Saying.
      </Title>
      <p className={style.text__ac}>
        We have some great features from the 
        application and it’s totally 
        free to use by all users around the world.
      </p>
      <Space direction="horizontal" className={style.p__10}>
        <Space direction="vertical" align="center">
          <Avatar src={iphone2} size={70}/>
          <Title level={5}>Alex Hansinburg</Title>
          <Text type="secondary">Designer</Text>
          <div className={style.text__ac}>
            <Text>
              “This is the most outstanding 
              app that I’ve ever try in my live, 
              this app is such an amazing masterpiece 
              and it’s suitable for you who is bussy with 
              their bussiness and must transfer money to 
              another person aut there. 
              Just try this app and see the power!”
            </Text>
          </div>
        </Space>
      </Space>
    </>
  )
}

export default Row3