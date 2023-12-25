import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Table, message, Divider } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';

import { getUsers, deleteUser, editUser, addUser } from "@/api/user";
import TypingCard from '@/components/TypingCard'
import EditUserForm from "./forms/edit-user-form"
import AddUserForm from "./forms/add-user-form"
const { Column } = Table;
const User = (props) => {

  const editUserFormRef = useRef(null);
  const addUserFormRef = useRef(null);

  const [state, setState] = useState({
    users: [],
    editUserModalVisible: false,
    editUserModalLoading: false,
    currentRowData: {},
    addUserModalVisible: false,
    addUserModalLoading: false,
  });



  useEffect(() => {
    fetchData();
  }, [state.addUserModalVisible, state.editUserModalVisible]);

  const fetchData = async () => {
    const result = await getUsers()
    const { users, status } = result.data
    if (status === 0) {

      setState({
        ...state,
        users
      })
    }
  }

  const handleAddUser = (row) => {
    setState({
      ...state,
      addUserModalVisible: true,
    });
  };

  const handleCancel = _ => {
    setState({
      ...state,
      editUserModalVisible: false,
      addUserModalVisible: false,
    });
  };


  const handleEditUser = (row) => {
    setState({
      ...state,
      currentRowData: Object.assign({}, row),
      editUserModalVisible: true,
    });
  };

  const handleDeleteUser = (row) => {
    const { id } = row
    if (id === "admin") {
      message.error("不能删除管理员用户！")
      return
    }
    deleteUser({ id }).then(res => {
      message.success("删除成功")
      fetchData();
    })
  }

  const handleAddUserOk = _ => {
    const form = addUserFormRef.current;

    form && form.validateFields().then((values) => {

      setState({ ...state, addUserModalLoading: true, });
      addUser(values).then((response) => {
        form.resetFields();
        setState({ ...state, addUserModalVisible: false, addUserModalLoading: false });
        message.success("添加成功!")

      }).catch(e => {
        message.success("添加失败,请重试!")
      })

      // fetchData();
    });
  };

  const handleEditUserOk = _ => {
    const form = editUserFormRef.current;

    form && form.validateFields().then((values) => {
      setState({ ...state, editModalLoading: true, });
      editUser(values).then((response) => {
        form.resetFields();
        setState({ ...state, editUserModalVisible: false, editUserModalLoading: false });
        message.success("编辑成功!")

      }).catch(e => {
        message.success("编辑失败,请重试!")
      })

      // fetchData();

    });
  };








  const { users } = state
  const title = (
    <span>
      <Button type='primary' onClick={handleAddUser}>添加用户</Button>
    </span>
  )
  const cardContent = `在这里，你可以对系统中的用户进行管理，例如添加一个新用户，或者修改系统中已经存在的用户。`
  return (
    <div className="app-container">
      <TypingCard title='用户管理' source={cardContent} />
      <br />
      <Card title={title}>
        <Table bordered rowKey="id" dataSource={users} pagination={false}>
          <Column title="用户ID" dataIndex="id" key="id" align="center" />
          <Column title="用户名称" dataIndex="name" key="name" align="center" />
          <Column title="用户角色" dataIndex="role" key="role" align="center" />
          <Column title="用户描述" dataIndex="description" key="description" align="center" />
          <Column title="操作" key="action" width={195} align="center" render={(text, row) => (
            <span>
              <Button type="primary" shape="circle" icon={<Icon component={icons["EditOutlined"]} />} title="编辑" onClick={handleEditUser.bind(null, row)} />
              <Divider type="vertical" />
              <Button type="primary" shape="circle" icon={<Icon component={icons["DeleteOutlined"]} />} title="删除" onClick={handleDeleteUser.bind(null, row)} />
            </span>
          )} />
        </Table>
      </Card>
      <EditUserForm
        currentRowData={state.currentRowData}
        // wrappedComponentRef={formRef => editUserFormRef = formRef}
        formRef={editUserFormRef}
        visible={state.editUserModalVisible}
        confirmLoading={state.editUserModalLoading}
        onCancel={handleCancel}
        onOk={handleEditUserOk}
      />
      <AddUserForm
        // wrappedComponentRef={formRef => addUserFormRef = formRef}
        formRef={addUserFormRef}
        visible={state.addUserModalVisible}
        confirmLoading={state.addUserModalLoading}
        onCancel={handleCancel}
        onOk={handleAddUserOk}
      />
    </div>
  );
}

export default User;
