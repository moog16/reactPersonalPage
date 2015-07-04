import React from 'react';

module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("p", null, "hi")
    )
  }
});
