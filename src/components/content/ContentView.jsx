import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Player from '../player/Player'
import styled from 'styled-components'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'

import loadingImg from './loading.svg'

const Container = styled.div`
  width: 99vw;
  height: 99vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
`

const mapStateToProps = (state) => {
  return {
    contents: state.contents.list
  }
}

class ContentView extends React.PureComponent {

  getContentToRender() {
    const { params } = this.props.match
    const { contents } = this.props

    if (contents.length === 0) {
      return null
    }

    if (params.contentId) {
      return find(
        contents,
        c => c.id === parseInt(params.contentId, 10)
      )
    } else {
      return contents[0]
    }
  }

  genNextUrl(content) {
    const { contents } = this.props
    const currentIdx = findIndex(contents, c => c.id === content.id)

    // if it is not the last element return the next one
    if (contents[currentIdx + 1]) {
      const next = contents[currentIdx + 1]
      return `/content/${next.slug}/${next.id}`
    } else {
      // otherwise return the first element
      const first = contents[0]
      return `/content/${first.slug}/${first.id}`
    }
  }

  genPrevUrl(content) {
    const { contents } = this.props
    const currentIdx = findIndex(contents, c => c.id === content.id)

    // if it is not the first element return the previous one
    if (contents[currentIdx - 1]) {
      const prev = contents[currentIdx - 1]
      return `/content/${prev.slug}/${prev.id}`
    } else {
      // otherwise return the last element
      const last = contents[contents.length - 1]
      return `/content/${last.slug}/${last.id}`
    }
  }

  render() {
    const content = this.getContentToRender()
      if (!content) {
        return <img src={loadingImg} className="loading-atom" alt="logo" />
      }

      const nextUrl = this.genNextUrl(content)
      const prevUrl = this.genPrevUrl(content)

      const videoJsOptions = {
        autoplay: false,
        controls: true,
        fill: true,
        responsive: true,
        poster: content.backgroundImage,
        sources: [{
          src: content.playbackUrl,
          type: 'video/mp4'
        }]
      }

      return (
        <Container key={content.id}>
          <Player
            { ...videoJsOptions }
            content={content}
            prevUrl={prevUrl}
            nextUrl={nextUrl}
          />
        </Container>
      )
  }
}

ContentView.propTypes = {
  contents: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ContentView)
