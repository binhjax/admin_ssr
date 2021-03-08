import * as React from 'react';
import { CustomLinkWidget } from './CustomLinkWidget';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams-defaults';
import { CustomLinkModel } from './CustomLinkModel';

/**
 * @author Daniel Lazar
 */
export class CustomLinkFactory extends DefaultLinkFactory<CustomLinkModel> {
  static NAME = 'rightAngle';

  constructor() {
    super(CustomLinkFactory.NAME);
  }

  generateModel(event): CustomLinkModel {
    return new CustomLinkModel();
  }

  generateReactWidget(event): JSX.Element {
    return <CustomLinkWidget diagramEngine={this.engine} link={event.model} factory={this} />;
  }
}
