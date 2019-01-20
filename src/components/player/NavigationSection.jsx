import React from 'react'
import PropTypes from 'prop-types'
import NavigationButton from '../buttons/NavigationButton'

import styled from 'styled-components'

const Container = styled.div`
  right: 0;
  bottom: 5px;
  position: absolute;
`

const NavigationSection  = ({prevUrl, nextUrl}) => (
  <Container>
    <NavigationButton to={prevUrl}>PREV VIDEO</NavigationButton>
    <NavigationButton to={nextUrl}>NEXT VIDEO</NavigationButton>
  </Container>
)

NavigationSection.propTypes = {
  prevUrl: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
};

export default NavigationSection
