import { React } from "libraries";
import { Space, Typography, Image, Carousel } from 'antd';
import '../../../assets/scss/main.scss';
import { img8, img7, img4 } from 'assets'
import style from "../homes.module.scss";

const {Title, Text} = Typography;

const Row3 = () => {
  return (
    <>
      <div className={style.main__auth}>
        <Title className={style.text__ac}>
          What Users are <span className={style.font__title}>Saying.</span>
        </Title>
        <p className={style.text__ac}>
          We have some great features from the 
          application and it’s totally 
          free to use by all users around the world.
        </p>
        <Carousel autoplay>
          <div>
            <Space direction="vertical" align="center" className={style.cards}>
              <Image src={img8} size={70}/>
              <Title level={5}>Alex Hansinburg</Title>
              <Text type="secondary">Designer</Text>
              <div className={style.center__text} >
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
          </div>
          <div>
            <Space direction="vertical" align="center" className={style.cards}>
              <Image src={img7} size={70} />
              <Title level={5}>Alex Hansinburg</Title>
              <Text type="secondary">Designer</Text>
              <div className={style.center__text}>
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
          </div>
          <div>
            <Space direction="vertical" align="center" className={style.cards}>
              <Image src={img4} size={70} />
              <Title level={5}>Alex Hansinburg</Title>
              <Text type="secondary">Designer</Text>
              <div className={style.center__text}>
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
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Row3