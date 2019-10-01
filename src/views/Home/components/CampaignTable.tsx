import * as React from 'react';
import moment from 'moment';
import Table from 'antd/lib/table';
import Badge from 'antd/lib/badge';
import Tag from 'antd/lib/tag';
import { abbrNum, formatDate } from './constants';

interface IdataSource {
  _id: string;
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  budget: number;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: any) => (
      <span>{`${text} ${record.id}`}</span>
    ),
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (text: string) => `${formatDate(text)}`,
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (text: string) => `${formatDate(text)}`,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'startDate',
    render: (_: string, record: any) => {
      const isBetween = moment().isBetween(record.startDate, record.endDate);
      return (
        <span>
          <Badge status={isBetween ? 'success' : 'error'} />
          <Tag color={isBetween ? 'green' : 'volcano'} key={record._id}>
            {isBetween ? 'Active' : 'Inactive'}
          </Tag>
        </span>
      );
    },
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
    key: 'budget',
    render: (text: number) => `${abbrNum(text)} USD`,
  },
];

const CampaignTable: React.SFC<{
  dataSource: IdataSource | any;
  onRowClick: Function;
  isLoading: boolean;
}> = props => {
  return (
    <section>
      <Table
        rowKey="_id"
        onRow={record => {
          return {
            onClick: event => {
              event.preventDefault();
              props.onRowClick(record);
            },
          };
        }}
        loading={props.isLoading}
        columns={columns}
        dataSource={props.dataSource}
      />
    </section>
  );
};

export default CampaignTable;
