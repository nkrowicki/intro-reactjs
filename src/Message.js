import PropTypes from 'prop-types';
import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      color: 'red',
    };
    // Handlers
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor() {
    this.setState({ color: 'green' });
  }

  render() {
    const { color } = this.state;
    const { message } = this.props;

    return (
      <div>
        <p style={{ color: color }}>{message}</p>
        <button onClick={this.handleChangeColor}>Change</button>
      </div>
    );
  }
}

export default Message;

Message.defaultProps = {
  message: 'Mensaje por defecto',
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

// Component funcional version 1
// const Message = ({color, message}) => (
//     <p style={{color: color || 'blue'}}>{message || 'Mensaje por defecto'}</p> 
// );

// export default Message;

// Component funcional version 2
// export default function Message({ color, message }) {
//     return (
//         <p style={{ color: color || 'blue' }}>{message || 'Mensaje por defecto'}</p>
//     );
// }
