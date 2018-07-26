import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
//import styles from './Styles/AlertMessgeStyles'
import { Button as Rbutton } from 'react-native-elements';

function Button(props) {
    return (
        <View>
        <Rbutton {...props}>{props.name}</Rbutton>
        </View>);
  }
export default Button;
