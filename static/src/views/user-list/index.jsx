import React from 'react';
import { Table } from 'antd';
import UserApi from '@@api/user';
import UtilDatetime from '@@utils/datetime';
import reqwest from 'reqwest';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'Create Time',
  dataIndex: 'createTime',
  render: createTime => `${UtilDatetime.parseStampToFormat(createTime)}`,
  width: '20%',
},{
  title: 'Update Time',
  dataIndex: 'updateTime',
  render: updateTime => `${UtilDatetime.parseStampToFormat(updateTime)}`,
  width: '20%',
}];

class View extends React.Component {
  
  state = {
    data: [],
    pagination: {
      pageSize: 20
    },
    loading: false,
  };

  handleTableChange = async (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });

    this.setUserListData({ pageCurrent: pager.current })
  }
  

  async setUserListData( params ) {
    let _params = params || {};
    let userResult = await UserApi.getUserList({
      pageCurrent: _params.pageCurrent || 1,
      pageSize: this.state.pagination.pageSize
    });
    let data = userResult.data.rows;
    let pagination = { ...this.state.pagination };
    pagination.total = userResult.data.count;
    this.setState({
      data,
      pagination,
    })
    console.log( userResult )
  }

  async componentDidMount() {
    this.setUserListData();
  }
  render() {
    return (
      <Table columns={columns}
          rowKey={ record => record.id + '' }
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
    );
  }
}

export default View;