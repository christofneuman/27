var React = require('react');
var PanelBody = require('./PanelBody.jsx');


var PanelNoTitle = React.createClass({
  render: function() {

    bodyStyle = {
      backgroundColor: '#fff',
      color: '#2f4f4f',
      height: '100px',
      border: '1px solid #e8e8e8'
    }

    return (
        <div className="col-md-4">
          <div style={bodyStyle} className="panel">
            <PanelBody label={this.props.label} stat={this.props.stat} />
          </div>
        </div>
    );
  }
});

module.exports = PanelNoTitle;
