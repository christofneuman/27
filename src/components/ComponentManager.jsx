var React = require('react');
var PanelNoTitle = require('./PanelNoTitle.jsx');
var PanelWithTitle = require('./PanelWithTitle.jsx');
var PanelLarge = require('./PanelLarge.jsx');
var Weather = require('./Weather.jsx');

var ComponentManager = React.createClass({
  render: function() {
    // var Stats = growthStats.map(function(stat, index) {
    //   return <PanelNoTitle key={index} label={stat.id} stat={stat.text} />;
    // });

    var style = {
      paddingTop: "50px"
    }

    var headingStyle = {
      height: '200px',
      backgroundColor: '#0096d0'
    };

    var bodyStyle = {
      backgroundColor: '#484d4d',
      textAlign: 'center',
      color: '#fff',
      borderBottomRightRadius: "4px",
      borderBottomLeftRadius: "4px",
    }

    var createGrowthStat = function(stat, index) {
      return <PanelNoTitle key={index} label={stat.id} stat={stat.text} />
    };

    var createTitleStat = function(stat, index) {
      return <PanelWithTitle key={index} label={stat.id} stat={stat.text} />
    };

    var createPrimaryStats = function(stat, index) {
      return <PanelLarge key={index} label={stat.id} stat={stat.text} />
    };

    return (
      <div style={style} className="row">
        <div className="col-md-8">
          <div className="row">
            {this.props.growthStats.map(createGrowthStat)}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="panel">
                <div style={headingStyle} className="panel-heading">
                </div>
                <div style={bodyStyle} className="panel-body">
                  <div className="row">
                    {this.props.primaryStats.map(createPrimaryStats)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Weather city={this.props.weatherStats.city} temperature={this.props.weatherStats.temperature} />
          {this.props.visitorStats.map(createTitleStat)}
        </div>
      </div>
    );
  }
});

module.exports = ComponentManager;
