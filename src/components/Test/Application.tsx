import * as SRD from '@projectstorm/react-diagrams';

import { CustomNodeFactory } from './CustomNodeFactory';
import { CustomPortFactory } from './CustomPortFactory';
import { CustomPortModel } from './CustomPortModel';
import { CustomLinkModel } from './CustomLinkModel';
import { CustomLinkFactory } from './CustomLinkFactory';

// import db from '../../.firebase/firebase';
import { CustomNodeModel } from './CustomNodeModel';
import { useDispatch } from 'react-redux';
import { DefaultDiagramState } from '@projectstorm/react-diagrams';
// import store from '../../store';
// import * as action from '../../actions/node';
// import * as sql from '../../actions/sql';
export class RightAnglePortModel extends SRD.DefaultPortModel {
  createLinkModel() {
    return new CustomLinkModel();
  }
}

export class Application {
  protected activeModel: SRD.DiagramModel;
  protected diagramEngine: SRD.DiagramEngine;
  protected engine: SRD.DagreEngine;

  constructor() {
    this.diagramEngine = SRD.default({ registerDefaultZoomCanvasAction: false });
    this.activeModel = new SRD.DiagramModel();
    this.engine = new SRD.DagreEngine({
      graph: {
        rankdir: 'TB',
        ranker: 'tight-tree',
        marginx: 0,
        marginy: 0,
      },
      includeLinks: false,
    });
    this.newModel();
  }
  dispatch = useDispatch();
  public saveNode = () => {
    // db.collection('saveDiagram')
    //   .doc('quang')
    //   .set({
    //     data: JSON.stringify(this.activeModel.serialize()),
    //   })
    //   .then(function () {
    //     message.success('Save successful!');
    //   })
    //   .catch(function () {
    //     message.error('Fail to save data');
    //   });
    // this.diagramEngine.repaintCanvas();
  };
  public toJson = () => {
    let diagram = '';
    this.activeModel.getNodes().forEach(node => {
      let table = 'Table ' + node.getOptions().extras + ' {';
      Object.values(node.getPorts()).forEach(port => {
        table =
          table + ' \n \t' + port.getOptions().extras.name + ' ' + port.getOptions().extras.type;
        if (port.getOptions().extras.key == 'pk') {
          table = table + ' [' + port.getOptions().extras.key + '] ';
        }
      });
      diagram = diagram + table + '\n}\n \n';
    });

    this.activeModel.getLinks().forEach(link => {
      diagram =
        diagram +
        '\nRef: ' +
        link
          .getTargetPort()
          .getNode()
          .getOptions().extras +
        '.' +
        link.getTargetPort().getOptions().extras.name +
        ' > ' +
        link
          .getSourcePort()
          .getNode()
          .getOptions().extras +
        '.' +
        link.getSourcePort().getOptions().extras.name +
        '\n';
    });

    localStorage.setItem('json-diagram', diagram);
    window.postMessage(diagram, '*');
  };

  // public toJson = () => {
  //   const text = localStorage.getItem('json-diagram');
  //   const test = text.split('\n');
  //   console.log(test);
  // };
  public zoomToFit = () => {
    this.diagramEngine.zoomToFit();
  };

  public zoomNode = () => {
    this.diagramEngine.zoomToFitNodes(50);
  };

  public autoDistribute = () => {
    this.engine.redistribute(this.activeModel);

    // only happens if pathfing is enabled (check line 25)
    this.diagramEngine.repaintCanvas();
  };
  public zoomIn = () => {
    this.activeModel.setZoomLevel(this.activeModel.getZoomLevel() + 10);
    this.diagramEngine.repaintCanvas();
  };
  public zoomOut = () => {
    this.activeModel.setZoomLevel(this.activeModel.getZoomLevel() - 10);
    this.diagramEngine.repaintCanvas();
  };

  public async newModel() {
    this.activeModel = new SRD.DiagramModel();
    this.activeModel.getZoomLevel();
    this.diagramEngine.getNodeFactories().registerFactory(new CustomNodeFactory());
    this.diagramEngine
      .getPortFactories()
      .registerFactory(new CustomPortFactory('custom', () => new CustomPortModel('', '', '')));
    this.diagramEngine.getLinkFactories().registerFactory(new CustomLinkFactory());
    const state = this.diagramEngine.getStateMachine().getCurrentState();
    if (state instanceof DefaultDiagramState) {
      state.dragNewLink.config.allowLooseLinks = false;
    }
    const node = new CustomNodeModel('employee');
    node.addCustomPort('quang', 'char', 'pk');
    node.addPort(new CustomPortModel('test', 'char', ''));
    const node2 = new CustomNodeModel('company');
    node2.addCustomPort('test', 'char', 'pk');
    node2.addPort(new CustomPortModel('test', 'char', ''));
    this.activeModel.addAll(node, node2);

    this.diagramEngine.setModel(this.activeModel);
    //3-A) create a default node
    // const nodes = await db.collection('saveDiagram').doc('quang').get();
    // let data = nodes.data().data;
    // this.activeModel.deserializeModel(JSON.parse(data), this.diagramEngine);
    // this.diagramEngine.setModel(this.activeModel);
  }

  public getActiveDiagram(): SRD.DiagramModel {
    return this.activeModel;
  }

  public getDiagramEngine(): SRD.DiagramEngine {
    return this.diagramEngine;
  }
}
