import { React } from "libraries";
import {Row1, Row2, Row3, Row4, Row5} from './components'
import '../../assets/scss/main.scss';
import { Typography } from "antd";
import { Footers } from "components/organisms";
import style from "./homes.module.scss"
const { Title, Text } = Typography;

const Home = () => {
  return (
    <>
      <Row1/>
      <Row2/>
      <Row3/>
      <Row4/>
      <Row5/>
      <div className={style.footers__}>
        <Title style={{color:"#fff"}} level={4}>
          Saku Saku
        </Title>
        <p style={{ width:"250px" }}>
          Simplify financial needs and saving much time 
          in banking needs with one single app.
        </p>
      </div>
        <Footers/>
    </>
  )
}

export default Home