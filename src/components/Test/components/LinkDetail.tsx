import React from 'react';
const LinkDetail = (props) => {
  return (
    <div>
      <h1 style={{ fontWeight: 'bold' }}>Relationship Properties:</h1>
      <div style={{ paddingTop: '20px' }}>
        <p>
          Parent Table:{' '}
          <span>{props.link ? props.link.getSourcePort().getNode().getOptions().extras : ''}</span>
        </p>
        <p>
          Parent Column:{' '}
          <span>{props.link ? props.link.getSourcePort().getOptions().extras.name : ''}</span>
        </p>
        <p>
          Child Table: {props.link ? props.link.getTargetPort().getNode().getOptions().extras : ''}
        </p>
        <p>Child Column: {props.link ? props.link.getTargetPort().getOptions().extras.name : ''}</p>
      </div>
    </div>
  );
};
export default LinkDetail;
