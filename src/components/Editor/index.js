import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-monokai';

const Editor = props => {
  const [data, setData] = useState('');
  const testData = `//// -- LEVEL 1
  //// -- Tables and References
  
  // Creating tables
  Table users as U {
    id int [pk, increment] // auto-increment
    full_name varchar
    created_at timestamp
    country_code int
    
  }
  
  Table countries {
    code int [pk]
    name varchar
    continent_name varchar
   }
  
  // Creating references
  // You can also define relaionship separately
  // > many-to-one; < one-to-many; - one-to-one
  Ref: U.country_code > countries.code  
  Ref: merchants.country_code > countries.code
  
  //----------------------------------------------//
  
  //// -- LEVEL 2
  //// -- Adding column settings
  
  Table order_items {
    order_id int [ref: > orders.id] // inline relationship (many-to-one)
    product_id int
    quantity int [default: 1] // default value
  }
  
  Ref: order_items. > products.id
  
  Table orders {
    id int [pk] // primary key
    user_id int [not null, unique]
    status varchar
    created_at varchar [note: 'When order created'] // add column note
  }
  
  //----------------------------------------------//
  
  //// -- Level 3 
  //// -- Enum, Indexes
  
  // Enum for 'products' table below
  Enum products_status {
    out_of_stock
    in_stock
    running_low [note: 'less than 20'] // add column note
  }
  
  // Indexes: You can define a single or multi-column index 
  Table products {
    id int [pk]
    name varchar
    merchant_id int [not null]
    price int
    status products_status
    
    Indexes {
      (merchant_id, status) [name:'product_status']
      id [unique]
    }
  }
  
  Table merchants {
    id int
    country_code int
    merchant_name varchar
    
    "created at" varchar
    admin_id int [ref: > U.id]
    Indexes {
      (id, country_code) [pk]
    }
  }
  
  Table merchant_periods {
    id int [pk]
    merchant_id int
    country_code int
    start_date datetime
    end_date datetime
  }
  
  Ref: products.merchant_id > merchants.id // many-to-one
  //composite foreign key
  Ref: merchant_periods.(merchant_id, country_code) > merchants.(id, country_code)
  `;
  useEffect(() => {
    window.addEventListener(
      'message',
      event => {
        console.log(event);

        if (event) {
          console.log(event);

          setData(localStorage.getItem('json-diagram'));
          console.log(localStorage.getItem('json-diagram'));
          console.log(data);
        }
      },
      false
    );
  });

  return (
    <AceEditor
      placeholder="Placeholder Text"
      mode="mysql"
      theme="monokai"
      name="blah2"
      width="100%"
      height="100%"
      //   onLoad={this.onLoad}
      //   onChange={this.onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={testData}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default Editor;
