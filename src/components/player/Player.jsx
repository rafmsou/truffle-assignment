import React from 'react'
import videojs from 'video.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavigationSection from './NavigationSection'
import styled from 'styled-components'

import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'

import 'video.js/dist/video-js.css'

const InfoBlock = styled.div`
  font-size: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background-color:#e4e4e4;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px;
  height: auto;
  width: 100%;
  border: 1px blue #e4e4e4;
  z-index: 5;
`

const Title = styled.h1`
  color: #151515;
  font-size: 2em;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 1.3em;
  color: #545454;
  text-align: left;
  max-width: 60%;
  margin-top: 10px;
`

const Date = styled(Description)`
  font-size: 1em;
`

const Poster = styled.div`
  position: absolute;
  width: 100%;
  height: 99%;
  z-index: 4;
`

export default class Player extends React.Component {
  state = { showOverlay: true, initialized: false }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('onPlayerReady', this)
    });

    this.player.on('play', () => this.setState({ showOverlay: false, initialized: true }))
    this.player.on('pause', () => this.setState({ showOverlay: true }))
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  playContent = () => {
    this.player.play()
  }

  renderPoster = (content) => {
    if (this.state.showOverlay === false) {
      return null
    }

    return (
      <Poster onClick={this.playContent}>
        <div className="play-button" onClick={this.playContent}></div>
        {!this.state.initialized && <img src={content.backgroundImage} alt="cover" width="100%" height="100%" />}
      </Poster>
    )
  }

  renderOverlay(content) {
    return (
      <ReactCSSTransitionGroup
        transitionName='fade'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {this.state.showOverlay && <InfoBlock key={content.id}>
          <Title>{content.title} ({distanceInWords(0, content.playbackDuration)})</Title>
          <Date>{format(content.createdAt, 'MMMM DD, YYYY')}</Date>
          <Description>{content.description}</Description>
          <NavigationSection prevUrl={this.props.prevUrl} nextUrl={this.props.nextUrl} />
        </InfoBlock>}
      </ReactCSSTransitionGroup>
    )
  }

  render() {
    const { content } = this.props;
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } className="video-js"></video>
        {this.renderOverlay(content)}
        {this.renderPoster(content)}
      </div>
    )
  }
}
