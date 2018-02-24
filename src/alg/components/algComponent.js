import React from 'react';
import PropTypes from 'prop-types';
import { Form, Modal, Button } from 'eoa-components';

export const letterTest = {
  method:  (val) => { return val.match(/[a-zA-Z]/) ? false : true; },
  message: 'No Letters Please'
};

const inputsConfig = [
    {
      name: 'productIdentifier',
      defaultValue: '',
      suffix: '',
      placeholder: 'Number',
      characterLimit: 10,
      optional: false,
      submitOnEnter: true,
      tests: [letterTest],
    },
    {
      name: 'foo',
      defaultValue: '',
      suffix: '',
      placeholder: 'Email',
      characterLimit: 10,
      optional: false,
      submitOnEnter: true,
      tests: [],
    },
    {
      name: 'bar',
      defaultValue: '',
      suffix: '',
      placeholder: 'Name',
      characterLimit: 10,
      optional: false,
      submitOnEnter: true,
      tests: [],
    }
  ];

export class DuckComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.consoleLog = this.consoleLog.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  };

  consoleLog(e) {
    console.log(e);
    this.toggleModal();
  }

  toggleModal(e) {
    this.setState({ ...this.state, modalOpen: !this.state.modalOpen });
  }

  render() {
    const buttonsConfig = [
      {
        name: 'cancel',
        type: 'default',
        label: 'Cancel',
        action: this.toggleModal
      },
      {
        name: 'submit',
        type: 'default',
        label: 'Submit',
        action: 'submit',
      }
    ];
    return (
      <div className="duck-component">
        <Button label="Open Form" onClick={this.toggleModal} />
        <Modal open={this.state.modalOpen} onClose={this.toggleModal}>
          <Form inputsConfig={inputsConfig}
            buttonsConfig={buttonsConfig}
            onSubmit={this.consoleLog}
          />
        </Modal>
      </div>
    );
  }
}

DuckComponent.propTypes = {
  foo: PropTypes.string.isRequired,
};

export default DuckComponent;
