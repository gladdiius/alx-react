import React,  {Component} from 'react'
import BodySection from './BodySection'
import PropTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'

class BodySectionWithMarginBottom extends Component{
    render() {
        const { title, children } = this.props;
    return(
    <div className={css(style.bodySectionWithMargin)} >
        <BodySection title={title}>
          {children}
        </BodySection>
    </div>)
    }
}
const style = StyleSheet.create({
    bodySectionWithMargin:{
        marginBottom: '40px'
    } 
})

BodySectionWithMarginBottom.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

BodySectionWithMarginBottom.defaultType = {
    children: null,
}

export default BodySectionWithMarginBottom;