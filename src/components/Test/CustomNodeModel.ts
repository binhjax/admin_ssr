import { NodeModel, NodeModelGenerics, PortModel } from '@projectstorm/react-diagrams-core';
import { CustomPortModel } from './CustomPortModel';

export interface CustomNodeModelGenerics {
  PORT: CustomPortModel;
}

export class CustomNodeModel extends NodeModel<NodeModelGenerics & CustomNodeModelGenerics> {
  constructor(name: string) {
    super({
      type: 'custom',
      extras: name,
    });
  }
  setName(name: string) {
	  
    this.options.extras = name;
  }
  getCustomPort(name: string) {
    let port: CustomPortModel = this.getPort(name) as CustomPortModel;
    return port;
  }
  addCustomPort(name: string, type: string, key: string): CustomPortModel {
    return this.addPort(new CustomPortModel(name, type, key)) as CustomPortModel;
  }
  setPorts(ports: { [s: string]: PortModel }) {
    this.ports = ports;
  }
  deletePort(port: CustomPortModel) {
    Object.values(port.getLinks()).forEach((link) => {
      link.remove();
    });
    this.removePort(port);
  }
}
