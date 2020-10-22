import { React, connect, useEffect, useState, useHistory } from "libraries";
import { Layout, Table, Typography, Button, message, Popconfirm } from 'antd';
import { AddTopUp, EditTopup, Footers, Headers, NavigationAdmin } from "components/organisms";
import '../../../assets/scss/main.scss';
import { getAllTopUp, deleteTopUp } from 'redux/actions';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const {Title} = Typography
const DataTopUp = (props) => {
    const [topup, setTopup] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = props.auth.data.tokenLogin
        props.getAllTopUp(token)
            .then(res => {
                setTopup(res.action.payload.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const onDelete = (id) => {
        const token = props.auth.data.tokenLogin
        props.deleteTopUp(token, id)
            .then((res) => {
                window.location.reload();
                message.success(res.value.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const columns = [
        {
            title: 'Num',
            dataIndex: 'num',
            fixed: 'left',
            width: '50px',
            sorter: {
                compare: (a, b) => a.num - b.num,
                multiple: 1,
            },
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Update',
            dataIndex: 'update',
            fixed: 'right',
            width: '100px'
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            fixed: 'right',
            width: '150px'
        }
    ]

    const onChange = (pagination, filters, sorter, extra) => {
        console.log(pagination, filters, sorter, extra);
    }

    const data = [{}]

    topup.map((item, id) => {
        data.push({
            key: id,
            num: item.num,
            description: item.description,
            update:
                <EditTopup match={props.match} detailTopup={item} onClick={() => history.push(`data-topup/${item.id}`)} />,
            delete:
                <Popconfirm title="Are you sure？" onConfirm={() => onDelete(item.id)} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                    <Button
                        style={{ marginRight: "10px" }}
                        type="primary"
                        shape="circle"
                        icon={<DeleteOutlined />}
                    />
                </Popconfirm>
        })
        return data
    })

    return (
        <>
            <Layout className="dashboard__temp">
                <Headers />
                <Layout className="sider__nav">
                    <NavigationAdmin />
                    <div className="main__content">
                        <div style={{ margin: '20px' }}>
                            <AddTopUp/>
                            <span style={{marginLeft: '15%', fontSize: '24px', fontWeight:'bold'}}>
                                Data Top Up
                            </span>
                        </div>
                        <Table width="100" columns={columns} dataSource={data} scroll={{ x: 1300 }} onChange={onChange} />
                    </div>
                </Layout>
                <Footers />
            </Layout>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    topUp: state.topUp,
})

const mapDispatchProps = { getAllTopUp, deleteTopUp }
export default connect(mapStateToProps, mapDispatchProps)(DataTopUp)