var React = require('react');
var PanelTitle = require('./PanelTitle.jsx');
var PanelBody = require('./PanelBody.jsx');

var PanelWithTitle = React.createClass({
  render: function() {

    return (
      <div className="row hidden-xs">
        <div className="col-md-12">
          <div className="panel">
            <PanelTitle label={this.props.label} stat={this.props.stat} />
            <PanelBody label="" stat="" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PanelWithTitle;
