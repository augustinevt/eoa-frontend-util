import React from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Button } from 'eoa-components';
import ReactTransitionGroup from 'react-addons-transition-group';
import * as d3 from 'd3';

import Node from './Node';

const nodes = [1,2];
var range = 10;

const simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id((d) => d.index ))
  .force("collide",d3.forceCollide((d) => d.r + 8 ).iterations(16) )
  .force("charge", d3.forceManyBody().strength(-1000))
  .force("center", d3.forceCenter(400 / 2, 400 / 2))
  .force("y", d3.forceY(0))
  .force("x", d3.forceX(0));

export class DuckComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      nodes: nodes,
      altNodes: d3.range(0, range).map((d) => ({ label: `l${d}`, r: Math.floor( d3.randomUniform(8, 28)() )})),
    };

    this.changeColor = this.changeColor.bind(this);
    this.addNode = this.addNode.bind(this);
  };

  changeColor() {
    const color = this.state.color === "red" ? "blue" : "red";
    this.setState({color});
  }

  addNode() {
    const {nodes} = {...this.state};
    nodes.push(nodes.length + 1);
    this.setState({nodes});
  }

  getNodes() {
    console.log(this.state.nodes);
    return this.state.altNodes.map((id) => {
      return <Node x={id.x} y={id.y} color={this.state.color}/>;
    });
  }

  render() {

    const nodes = this.getNodes();
    const newNodes = simulation.nodes(this.state.altNodes);
    console.log(this.state.altNodes);
     let transform = `translate(${10}, ${20})`;
    return (
      <div>
      <Button onClick={this.changeColor} />
      <Button onClick={this.addNode} />
      <svg height="700" width="700">
        <g transform={transform}>
          <ReactTransitionGroup component="g">
            {nodes}
          </ReactTransitionGroup>
        </g>
      </svg>
      </div>
     );
  }
}

DuckComponent.propTypes = {
  // foo: PropTypes.string.isRequired,
};

export default DuckComponent;
