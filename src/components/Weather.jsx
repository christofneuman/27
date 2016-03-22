var React = require('react');

var Weather = React.createClass({
  render: function() {

    divStyle = {
      backgroundColor: '#ff8a00',
      color: '#fff',
      height: '100px',
      textAlign: 'center',
      fontSize: '24px',
    };

    bodyStyle = {
      paddingTop: '0px'
    };

    return (
      <div style={divStyle} className="panel hidden-xs">
        <div className="panel-heading">
        </div>
        <div style={bodyStyle} className="panel-body">
        <strong>
          {this.props.temperature}
        </strong>
        <br />
        <small>
          {this.props.city}
        </small>
        </div>
      </div>
    );
  }
});

module.exports = Weather;
