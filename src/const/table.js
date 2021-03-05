export const data = {
  tables: [
    {
      name: 'Product1',
      columns: [
        {
          name: 'ID',
          type: 'INT',
          key: 'PRIMARY KEY',
        },
        {
          name: 'name',
          type: 'TEXT',
          key: '',
        },
        {
          name: 'new_col',
          type: 'int',
          key: '',
        },
      ],
    },
    {
      name: 'Profile',
      columns: [
        {
          name: 'Tuan Quang',
          type: 'CHAR',
          key: 'PRIMARY KEY',
        },
        {
          name: 'product_id',
          type: 'INT',
          key: '',
        },
      ],
    },
    {
      name: 'Tbl New',
      columns: [
        {
          name: 'ID',
          type: 'int',
          key: 'PRIMARY KEY',
        },
        {
          name: 'product_id',
          type: 'INT',
          key: '',
        },
      ],
    },
    {
      name: 'New Table',
      columns: [
        {
          name: 'New Column',
          type: 'INT',
          key: 'PRIMARY KEY',
        },
        {
          name: 'new_col',
          type: 'VARCHAR',
          key: '',
        },
        {
          name: 'test name',
          type: 'TINYTEXT',
          key: '',
        },
      ],
    },
  ],
  relationships: [
    {
      parentTable: 'Product1',
      parentColumn: 'ID',
      childTable: 'Profile',
      childColumn: 'product_id',
    },
    {
      parentTable: 'Product1',
      parentColumn: 'ID',
      childTable: 'Tbl New',
      childColumn: 'product_id',
    },
  ],
};
