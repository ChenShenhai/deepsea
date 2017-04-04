
import React from 'react';
import { Table } from 'antd';
import UserApi from '@@api/user';
// import reqwest from 'reqwest';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

class View extends React.Component {
  
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  handleTableChange = async (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });

    let userResult = await UserApi.getUserList();
    console.log( userResult )

    // this.fetch({
    //   pageSize: pagination.pageSize,
    //   pageCurrent: pagination.current,
    //   // sortField: sorter.field,
    //   // sortOrder: sorter.order,
    //   // ...filters,
    // });
  }
  // fetch = (params = {}) => {
  //   console.log('params:', params);
  //   this.setState({ loading: true });
  //   reqwest({
  //     url: 'https://randomuser.me/api',
  //     method: 'get',
  //     data: {
  //       results: 10,
  //       ...params,
  //     },
  //     type: 'json',
  //   }).then((data) => {
  //     const pagination = { ...this.state.pagination };
  //     // Read total count from server
  //     // pagination.total = data.totalCount;
  //     pagination.total = 200;

  //     // this.setState({
  //     //   loading: false,
  //     //   data: data.results,
  //     //   pagination,
  //     // });
      
  //   });
  // }

  async setUserListData( params ) {
    let userResult = await UserApi.getUserList();
    console.log( userResult )
  }

  async componentDidMount() {
    // this.fetch();
    this.setUserListData();
  }
  render() {
    return (
      <Table columns={columns}
          rowKey={record => record.registered}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
    );
  }
}

export default View;