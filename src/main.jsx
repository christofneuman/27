var React = require('react');
var ReactDOM = require('react-dom');
var ComponentManager = require('./components/ComponentManager.jsx');

var growthStats = [
  {'id':'New followers added this month', 'text':'20'},
  {'id':'Average Monthly Income', 'text':'$ 1,250'},
  {'id':'Yearly Income Goal', 'text':'$ 13,685'},
];

var visitorStats = [
  {'id':'New Visitors', 'text':'1.5k'},
  {'id':'Bounce Rate', 'text':'50%'},
  {'id':'Searches', 'text':'28%'},
  {'id':'Traffic', 'text':'140.5kb'},
];

var primaryStats = [
  {'id':'Shot Views', 'text':'15,080'},
  {'id':'Likes', 'text':'12,000'},
  {'id':'Comments', 'text':'5,100'},
];

var weatherStats = {
  "city": "Paris",
  "temperature": "18"
}


ReactDOM.render(<ComponentManager growthStats={growthStats} visitorStats={visitorStats} primaryStats={primaryStats} weatherStats={weatherStats}/>, document.getElementById('growthStats'));
