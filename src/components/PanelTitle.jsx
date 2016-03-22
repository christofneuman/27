var React = require('react');

var PanelTitle = React.createClass({
  render: function() {

    headerStyle = {
      backgroundColor: '#b28ad6',
      color: '#fff',
      height: "70px",
      borderTopRightRadius: "4px",
      borderTopLeftRadius: "4px",
    }

    return (
      <div style={headerStyle} className="panel-title">
        <small>
          {this.props.label}
        </small>
        <br />
        <strong>
          {this.props.stat}
        </strong>
      </div>
    );
  }
});

module.exports = PanelTitle;
