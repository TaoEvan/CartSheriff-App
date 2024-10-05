// QRCodeScanner.js
import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: props.delay || 100,
      result: 'No result',
      error: null, // State for handling errors
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleScan(data) {
    // Check if the scanned data is valid
    if (data && typeof data === 'object' && data.text) {
      this.setState({ result: data.text, error: null }); // Update result and reset error
      // Call the onScan prop if provided
      this.props.onScan(data);
    } else {
      // If the data is not valid, set an error message
      this.setState({ result: 'No result', error: 'Invalid QR code format.' });
    }
  }

  handleError(err) {
    // Set the error message in state
    this.setState({ error: 'Error scanning QR code: ' + err.message });
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div className="flex flex-col items-center">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        
        <div className="card bg-neutral text-neutral-content w-80 my-10">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{this.state.result}</h2>
            {/* Display error message if there is an error */}
            {this.state.error && (
              <p className="text-red-500">{this.state.error}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QRScanner;
