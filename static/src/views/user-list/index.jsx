import React from 'react';
import { Table, Modal, Form, Input, Button, Radio} from 'antd';
import UserApi from '@@api/user';
import UtilDatetime from '@@utils/datetime';
import reqwest from 'reqwest';
import 'antd/lib/button/style';

const FormItem = Form.Item;

class View extends React.Component {
  
  state = {
    data: [],
    pagination: {
      pageSize: 20
    },
    loading: false,
    isEditDialogVisible: false,
  };
  constructor(props) { 
    super(props);
    this.tableColumns = [{
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
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <span>
          <a onClick={() => this.onClickShowEidtDialog( index )} href="javascript:void(0);">Edit</a>
          <span className="ant-divider" />
          <a href="#">Delete</a>
        </span>
      ),
    }];
  }
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

  onClickShowEidtDialog( index ) {
    this.setState({
      isEditDialogVisible: true
    })
  }

  onClickOkForEidtDialog() {
    // alert('ok');
    this.setState({
      isEditDialogVisible: false
    });
  }

  onClickCancelForEidtDialog() {
    // alert('cancel');
    this.setState({
      isEditDialogVisible: false
    });
  }

  render() {
    const formItemLayout =  {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <Table columns={this.tableColumns}
          rowKey={ record => record.id + '' }
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
        <Modal 
          title="Basic Modal" 
          visible={this.state.isEditDialogVisible}
          onOk={this.onClickOkForEidtDialog.bind(this)} 
          onCancel={this.onClickCancelForEidtDialog.bind(this)} >
          
          <Form layout={'horizontal'}>
            
            <FormItem
              label="Field A"
              {...formItemLayout} >
              <Input placeholder="input placeholder" />
            </FormItem>
            <FormItem
              label="Field B"
              {...formItemLayout}>
              <Input placeholder="input placeholder" />
            </FormItem>
          </Form>
        </Modal>
      </div>
      
    );
  }
}

export default View;