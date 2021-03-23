import React, { useState, MouseEvent, useEffect, DragEvent } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  OnLoadParams,
  Elements,
  Connection,
  Edge,
  ArrowHeadType,
  Node,
  ReactFlowProvider,
  ElementId,
  Controls,
} from 'react-flow-renderer';
import './index.css';

const initialElements: Elements = [
  { id: '1', type: 'input', data: { label: 'Input 1' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
  { id: '2a', data: { label: 'Node 2a' }, position: { x: 0, y: 180 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 250, y: 200 } },
  { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 300 } },
  { id: '3a', data: { label: 'Node 3a' }, position: { x: 150, y: 300 } },
  { id: '5', data: { label: 'Node 5' }, position: { x: 250, y: 400 } },
  { id: '6', type: 'output', data: { label: 'Output 6' }, position: { x: 50, y: 550 } },
  { id: '7', type: 'output', data: { label: 'Output 7' }, position: { x: 250, y: 550 } },
  { id: '8', type: 'output', data: { label: 'Output 8' }, position: { x: 525, y: 600 } },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    label: 'bezier edge (default)',
    className: 'normal-edge',
  },
  { id: 'e2-2a', source: '2', target: '2a', type: 'smoothstep', label: 'smoothstep edge' },
  { id: 'e2-3', source: '2', target: '3', type: 'step', label: 'step edge' },
  { id: 'e3-4', source: '3', target: '4', type: 'straight', label: 'straight edge' },
  {
    id: 'e3-3a',
    source: '3',
    target: '3a',
    type: 'straight',
    label: 'label only edge',
    style: { stroke: 'none' },
  },
  {
    id: 'e3-5',
    source: '4',
    target: '5',
    animated: true,
    label: 'animated styled edge',
    style: { stroke: 'red' },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    label: 'styled label',
    labelStyle: { fill: 'red', fontWeight: 700 },
    type: 'step',
    arrowHeadType: ArrowHeadType.Arrow,
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    label: 'label with styled bg',
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
];
let idNode = 0;
const getId = (): ElementId => `dndnode_${idNode++}`;
const Flow = () => {
  const [elements, setElements] = useState(initialElements);
  const [nodeName, setNodeName] = useState<string>('custom node');
  const [label, setLabel] = useState<string>('custom label');
  const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams>();

  const [id, setId] = useState();
  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: Connection | Edge) =>
    setElements((els) =>
      addEdge(
        {
          id: getId(),
          source: params.source,
          target: params.target,
          label: 'custom',
          type: 'smoothstep',
          labelBgPadding: [8, 4],
          labelBgBorderRadius: 4,
          arrowHeadType: ArrowHeadType.ArrowClosed,
        },
        els
      )
    );
  const onLoad = (_reactFlowInstance: OnLoadParams) => setReactFlowInstance(_reactFlowInstance);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === id) {
          // it's important that you create a new object here in order to notify react flow about the change
          el.data = {
            ...el.data,
            label: nodeName,
          };
        }

        return el;
      })
    );
  }, [nodeName, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === id) {
          // it's important that you create a new object here in order to notify react flow about the change
          el = {
            ...el,
            label: label,
          };
        }

        return el;
      })
    );
  }, [label, setElements]);

  const onElementClick = (_: MouseEvent, element) => {

    setId(element.id);
    setNodeName(element.data?.label);
    setLabel(elements.find((el)=> el.id === element.id).label);
  };
  const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const type = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.project({ x: event.clientX - 500, y: event.clientY - 90 });
      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setElements((es) => es.concat(newNode));
    }
  };
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div style={{ display: 'flex', height: 800 }}>
      <ReactFlowProvider>
        <div style={{ flexGrow: 1, height: '100%', background: '#fff' }}>
          <ReactFlow
            elements={elements}
            onElementClick={onElementClick}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            onDrop={onDrop}
            onLoad={onLoad}
            snapToGrid={true}
            onDragOver={onDragOver}
          >
            <Controls />
          </ReactFlow>
        </div>
        <aside style={{ width: '20%', height: '100%' }}>
          <div className='description'>You can drag these nodes to the pane on the right.</div>
          <div
            style={{
              height: 20,
              padding: 4,
              border: '1px solid #1a192b',
              borderRadius: 2,
              marginBottom: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'grab',
            }}
            onDragStart={(event: DragEvent) => onDragStart(event, 'input')}
            draggable
          >
            Input Node
          </div>
          <div
            style={{
              height: 20,
              padding: 4,
              border: '1px solid #0041d0',
              borderRadius: 2,
              marginBottom: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'grab',
            }}
            onDragStart={(event: DragEvent) => onDragStart(event, 'default')}
            draggable
          >
            Default Node
          </div>
          <div
            style={{
              height: 20,
              padding: 4,
              border: '1px solid #ff0072',
              borderRadius: 2,
              marginBottom: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'grab',
            }}
            onDragStart={(event: DragEvent) => onDragStart(event, 'output')}
            draggable
          >
            Output Node
          </div>
          <div>
            <label>Node name:</label>
            <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />
          </div>
          <div>
            <label>Label:</label>
            <input value={label} onChange={(evt) => setLabel(evt.target.value)} />
          </div>
        </aside>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
