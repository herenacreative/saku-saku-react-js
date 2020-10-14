import { React, useHistory } from "libraries";
import { Space, Avatar, Layout } from 'antd';
import '../../../assets/scss/main.scss';
import { air, canon, dell, dropbox, hm, microsoft } from 'assets'
import style from "../homes.module.scss";

const Row2 = () => {
  const history = useHistory()

  return (
    <>
      <Layout>
        <Space direction="horizontal" className={style.p__10}>
          <img src={microsoft} size={100} />
          <img src={dropbox} size={100} />
          <img src={hm} size={100} />
          <img src={air} size={100} />
          <img src={canon} size={100} />
          <img src={dell} size={100} />
        </Space>
      </Layout>
    </>
  )
}

export default Row2