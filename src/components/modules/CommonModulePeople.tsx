import { Table } from "antd";

// -----------------------------------------------------------------

export type CommonModulePeopleProps = {
  setValue?: (value: string) => void;
};

export const CommonModulePeople = ({
  setValue = () => {},
}: CommonModulePeopleProps) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "City",
      dataIndex: "city",
    },
  ];

  const people = [
    {
      key: 1,
      name: "John Doe",
      age: 30,
      city: "New York",
    },
    {
      key: 2,
      name: "Jane Smith",
      age: 25,
      city: "Los Angeles",
    },
    {
      key: 3,
      name: "Michael Johnson",
      age: 40,
      city: "Chicago",
    },
    {
      key: 4,
      name: "Emily Brown",
      age: 22,
      city: "Houston",
    },
    {
      key: 5,
      name: "William Lee",
      age: 28,
      city: "San Francisco",
    },
  ];

  const rowSelection = {
    onChange: (_: any, selectedRows: any) => {
      if (selectedRows && selectedRows.length > 0) {
        setValue(selectedRows[0].name);
      }
    },
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={people}
      />
    </div>
  );
};
