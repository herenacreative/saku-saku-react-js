import { React } from "libraries";
import { Space, Layout } from 'antd';
import '../../../assets/scss/main.scss';
import { air, canon, dell, dropbox, hm, microsoft } from 'assets'
import style from "../homes.module.scss";

const Row2 = () => {
  return (
    <>
      <Layout className={style.main__}>
        <Space className={style.p__10}>
          <img src={microsoft} className={style.logos}/>
          <img src={dropbox} className={style.logos}/>
          <img src={hm} className={style.logos}/>
          <img src={air} className={style.logos}/>
          <img src={canon} className={style.logos}/>
          <img src={dell} className={style.logos}/>
        </Space>
      </Layout>
    </>
  )
}

export default Row2