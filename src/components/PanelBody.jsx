var React = require('react');

var PanelBody = React.createClass({
  render: function() {

    return (
      <div className="panel-body">
        <h5>
          {this.props.stat}
        </h5>
        <small>
          {this.props.label}
        </small>
      </div>
    );
  }
});

module.exports = PanelBody;
