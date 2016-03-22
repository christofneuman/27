var React = require('react');

var PanelLarge = React.createClass({
  render: function() {


    // if (this.props.headingHeight) {
    //   headingStyle.background = this.props.headingColor;
    //   headerStyle.height = this.props.headingHeight;
    // }

    return (
      <div className="col-xs-4">
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

module.exports = PanelLarge;
