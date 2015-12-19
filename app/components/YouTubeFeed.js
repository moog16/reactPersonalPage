import React from 'react';
import $ from 'jquery';

class YouTubeFeed extends React.Component {
  render() {
    return  (
      <div>
        hello
      </div>
    )
  }

  componentDidMount() {
    debugger
    // $.get(this.props.source, function(result) {
    //   var lastGist = result[0];
    //   if (this.isMounted()) {
    //     this.setState({
    //       username: lastGist.owner.login,
    //       lastGistUrl: lastGist.html_url
    //     });
    //   }
    // }.bind(this));
  }
};
YouTubeFeed.propTypes = {
};
YouTubeFeed.defaultProps = {
};

export default YouTubeFeed;
