import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.pushState("/")
    }
  }
  render() {
    const { location } = this.props;
    return <span>hello</span>
  }
}

export default Detail;