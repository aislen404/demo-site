import React from 'react';
import { connect } from 'react-redux';

import ClaimRequestButton from '../components/ClaimRequestButton';

class IssuerPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="section-title">Issue Certification</h3>
        <p>Hello {this.props.credentials.name}, welcome to this course. </p>
        <div className="section-button">
          <ClaimRequestButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(IssuerPage);
