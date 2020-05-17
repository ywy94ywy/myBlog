import React, { useEffect } from 'react';
import { Table, Button, Card, Form, Input } from 'antd';
import { useRequest } from 'umi';
import { getArticleList, addArticle, delArticle } from '../services/test';
import { ColumnProps } from 'antd/es/table';

export default () => {
  const { data: articleList, loading, run: runGetList } = useRequest(
    getArticleList,
    {
      manual: true,
    },
  );
  const { data: addRes, loading: addLoading, run: runAdd } = useRequest(
    addArticle,
    {
      manual: true,
    },
  );
  const { data: delRes, run: runDel } = useRequest(delArticle, {
    manual: true,
  });
  const [form] = Form.useForm();

  useEffect(() => {
    runGetList();
  }, [addRes, delRes]);

  const columns: any = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '日期',
      dataIndex: 'createtime',
    },
    {
      title: '内容',
      dataIndex: 'content',
      render(text) {
        // console.log(text)
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></div>
        );
      },
    },
    {
      title: '操作',
      render(text, record) {
        return (
          <Button
            type="link"
            onClick={() => {
              runDel(record.id);
            }}
          >
            删除
          </Button>
        );
      },
    },
  ];

  return (
    <Card>
      <Form
        layout="vertical"
        form={form}
        onFinish={formData => {
          runAdd(formData);
        }}
      >
        <Form.Item label="标题" name="title">
          <Input></Input>
        </Form.Item>
        <Form.Item label="内容" name="content">
          <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={addLoading}>
            添加
          </Button>
        </Form.Item>
      </Form>

      <Button>删除</Button>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={articleList}
        loading={loading}
      ></Table>
    </Card>
  );
};
