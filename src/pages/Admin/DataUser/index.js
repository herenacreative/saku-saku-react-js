import { React, connect, useEffect, useState, useHistory, queryString, Link } from "libraries";
import { Layout, Table, Typography, Button, Image, message, Popconfirm } from 'antd';
import { AddUser, EditUser, Footers, Headers, Navigation, NavigationAdmin } from "components/organisms";
import '../../../assets/scss/main.scss';
import { getAllUsers, deleteUser } from 'redux/actions';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import config from '../../../configs/index';

const DataUser = (props) => {
    const [users, setUsers] = useState([])
    const history = useHistory()

    useEffect(() => {
        let parsed = queryString.parse(props.location.search);
        let search = parsed.search || "";
        let limit = parsed.limit || "100";
        let page = parsed.page || "";
        const token = props.auth.data.tokenLogin
        props.getAllUsers(token, search, page, limit)
            .then(res => {
                setUsers(res.action.payload.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const onDelete = (id) => {
        const token = props.auth.data.tokenLogin
        props.deleteUser(token, id)
        .then((res) => {
            window.location.reload();
            message.success("success")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            fixed: 'left',
            width: '50px',
            sorter: {
                compare: (a, b) => a.id - b.id,
                multiple: 1,
            },
        },
        {
            title: 'Fullname',
            dataIndex: 'fullname',
            sorter: {
                sorter: (a, b) => a.fullname - b.fullname,
                sortDirections: ['descend', 'ascend'],
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            sorter: {
                compare: (a, b) => a.balance - b.balance,
                multiple: 1,
            },
        },
        {
            title: 'Verify',
            dataIndex: 'verify',
            width: '75px',
            sorter: {
                compare: (a, b) => a.verify - b.verify,
                multiple: 1,
            },
        },
        {
            title: 'Role',
            dataIndex: 'role',
            width: '75px',
            sorter: {
                compare: (a, b) => a.role - b.role,
                multiple: 1,
            },
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
        }
    ]

    const onChange = (pagination, filters, sorter, extra) => {
        console.log(pagination, filters, sorter, extra);
    }

    const data = [{}]

    users.map((item, id)=> {
        data.push({
            key: id,
            id: item.id,
            fullname: <Link to={`/transfer/${item.id}`}>{item.fullname}</Link>,
            email: item.email,
            photo: <Image width={50} height={50} src={`${config.imgURL}/${item.photo}`}/>,
            username: item.username,
            balance: item.balance,
            verify: item.verify,
            role: item.role,
            update: 
                <EditUser match={props.match} detailUser={item} onClick={() => history.push(`data-user/${item.id}`)}/>,
            delete: 
                <Popconfirm title="Are you sure？" onConfirm={()=>onDelete(item.id)} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
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
    users: state.topUp,
    transfer: state.transfer
})

const mapDispatchProps = { getAllUsers, deleteUser }
export default connect(mapStateToProps, mapDispatchProps)(DataUser)