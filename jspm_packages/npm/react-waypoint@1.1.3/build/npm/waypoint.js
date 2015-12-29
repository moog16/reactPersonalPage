/* */ 
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var PropTypes = React.PropTypes;

var POSITIONS = {
  above: 'above',
  inside: 'inside',
  below: 'below'
};

/**
 * Calls a function when you scroll to the element.
 */
var Waypoint = React.createClass({
  displayName: 'Waypoint',

  propTypes: {
    // threshold is percentage of the height of the visible part of the
    // scrollable ancestor (e.g. 0.1)
    threshold: PropTypes.number,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func
  },

  statics: {
    above: POSITIONS.above,
    below: POSITIONS.below
  },

  /**
   * @return {Object}
   */
  getDefaultProps: function getDefaultProps() {
    return {
      threshold: 0,
      onEnter: function onEnter() {},
      onLeave: function onLeave() {}
    };
  },

  componentDidMount: function componentDidMount() {
    this.scrollableAncestor = this._findScrollableAncestor();
    this.scrollableAncestor.addEventListener('scroll', this._handleScroll);
    window.addEventListener('resize', this._handleScroll);
    this._handleScroll(null);
  },

  componentDidUpdate: function componentDidUpdate() {
    // The element may have moved.
    this._handleScroll(null);
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.scrollableAncestor) {
      // At the time of unmounting, the scrollable ancestor might no longer
      // exist. Guarding against this prevents the following error:
      //
      //   Cannot read property 'removeEventListener' of undefined
      this.scrollableAncestor.removeEventListener('scroll', this._handleScroll);
    }
    window.removeEventListener('resize', this._handleScroll);
  },

  /**
   * Traverses up the DOM to find an ancestor container which has an overflow
   * style that allows for scrolling.
   *
   * @return {Object} the closest ancestor element with an overflow style that
   *   allows for scrolling. If none is found, the `window` object is returned
   *   as a fallback.
   */
  _findScrollableAncestor: function _findScrollableAncestor() {
    var node = ReactDOM.findDOMNode(this);

    while (node.parentNode) {
      node = node.parentNode;

      if (node === document) {
        // This particular node does not have a computed style.
        continue;
      }

      if (node === document.documentElement) {
        // This particular node does not have a scroll bar, it uses the window.
        continue;
      }

      var style = window.getComputedStyle(node);
      var overflowY = style.getPropertyValue('overflow-y') || style.getPropertyValue('overflow');

      if (overflowY === 'auto' || overflowY === 'scroll') {
        return node;
      }
    }

    // A scrollable ancestor element was not found, which means that we need to
    // do stuff on window.
    return window;
  },

  /**
   * @param {Object} event the native scroll event coming from the scrollable
   *   ancestor, or resize event coming from the window. Will be undefined if
   *   called by a React lifecyle method
   */
  _handleScroll: function _handleScroll(event) {
    if (!this.isMounted()) {
      return;
    }

    var currentPosition = this._currentPosition();
    var previousPosition = this._previousPosition || null;

    // Save previous position as early as possible to prevent cycles
    this._previousPosition = currentPosition;

    if (previousPosition === currentPosition) {
      // No change since last trigger
      return;
    }

    if (currentPosition === POSITIONS.inside) {
      this.props.onEnter.call(this, event, previousPosition);
    } else if (previousPosition === POSITIONS.inside) {
      this.props.onLeave.call(this, event, currentPosition);
    }

    var isRapidScrollDown = previousPosition === POSITIONS.below && currentPosition === POSITIONS.above;
    var isRapidScrollUp = previousPosition === POSITIONS.above && currentPosition === POSITIONS.below;
    if (isRapidScrollDown || isRapidScrollUp) {
      // If the scroll event isn't fired often enough to occur while the
      // waypoint was visible, we trigger both callbacks anyway.
      this.props.onEnter.call(this, event, previousPosition);
      this.props.onLeave.call(this, event, currentPosition);
    }
  },

  /**
   * @param {Object} node
   * @return {Number}
   */
  _distanceToTopOfScrollableAncestor: function _distanceToTopOfScrollableAncestor(node) {
    if (this.scrollableAncestor !== window && !node.offsetParent) {
      throw new Error('The scrollable ancestor of Waypoint needs to have positioning to ' + 'properly determine position of Waypoint (e.g. `position: relative;`)');
    }

    if (this.scrollableAncestor === window) {
      var rect = node.getBoundingClientRect();
      return rect.top + window.pageYOffset - document.documentElement.clientTop;
    }

    if (node.offsetParent === this.scrollableAncestor || !node.offsetParent) {
      return node.offsetTop;
    } else {
      return node.offsetTop + this._distanceToTopOfScrollableAncestor(node.offsetParent);
    }
  },

  /**
   * @return {boolean} true if scrolled down almost to the end of the scrollable
   *   ancestor element.
   */
  _currentPosition: function _currentPosition() {
    var waypointTop = this._distanceToTopOfScrollableAncestor(ReactDOM.findDOMNode(this));
    var contextHeight = undefined;
    var contextScrollTop = undefined;

    if (this.scrollableAncestor === window) {
      contextHeight = window.innerHeight;
      contextScrollTop = window.pageYOffset;
    } else {
      contextHeight = this.scrollableAncestor.offsetHeight;
      contextScrollTop = this.scrollableAncestor.scrollTop;
    }

    var thresholdPx = contextHeight * this.props.threshold;

    var isBelowTop = contextScrollTop <= waypointTop + thresholdPx;
    if (!isBelowTop) {
      return POSITIONS.above;
    }

    var contextBottom = contextScrollTop + contextHeight;
    var isAboveBottom = contextBottom >= waypointTop - thresholdPx;
    if (!isAboveBottom) {
      return POSITIONS.below;
    }

    return POSITIONS.inside;
  },

  /**
   * @return {Object}
   */
  render: function render() {
    // We need an element that we can locate in the DOM to determine where it is
    // rendered relative to the top of its context.
    return React.createElement('span', { style: { fontSize: 0 } });
  }
});

module.exports = Waypoint;
