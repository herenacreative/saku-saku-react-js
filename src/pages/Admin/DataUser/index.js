import {React} from "libraries";
// import { Table } from 'antd';
import { Layout, Table, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
const { Header, Footer, Sider, Content } = Layout;

const { Text } = Typography;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

const DataUser = () => {
    return (
        <>
            <Layout className="dashboard__temp">
                <Headers />
                <Layout className="sider__nav">
                    <Sider
                        className="nav__nav"
                        breakpoint="xs"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        {/* <div className="nav"> */}
                        <Navigation />
                        {/* </div> */}
                    </Sider>
                    <div className="main__content">
                        <Content><Table columns={columns} dataSource={data} onChange={onChange} /></Content>
                    </div>

                </Layout>
                <Footers />
            </Layout>
        </>
    )
//  const DataUser = () => { return(<Table columns={columns} dataSource={data} onChange={onChange} />)};
}
 export default DataUser