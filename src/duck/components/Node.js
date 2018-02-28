import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Form, Modal, Button } from 'eoa-components';

import * as d3 from 'd3';

const simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id((d) => d.index ))
  .force("collide",d3.forceCollide((d) => d.r + 8 ).iterations(16) )
  .force("charge", d3.forceManyBody().strength(-100))
  .force("center", d3.forceCenter(400 / 2, 400 / 2))
  .force("y", d3.forceY(0))
  .force("x", d3.forceX(0));

export class Node extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      y: '50',
      opacity: 0,
    };
  };

  componentDidMount() {
    console.log('did mount');
  }

  componentWillEnter(callback) {
    console.log('did enter!!!!');
    let node = d3.select(ReactDOM.findDOMNode(this));

       this.setState({x: this.props.i * 50});

       node.transition()
           .attr('cy', 0)
           .on('end', () => {
               this.setState({y: 0, fillOpacity: 1});
               callback();
           });
  }

  componentWillReceiveProps() {
    console.log('component will recieve props!');
  }

  componentWillLeave() {
    console.log('component will leave');
  }

  render() {
    return (
      <circle cx={`${this.props.x}`} cy={`${this.props.y}`} r="10" fill={`${this.props.color}`} />
    );
  }
}

Node.propTypes = {

};

export default Node;
