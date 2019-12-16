import React from 'react';
import * as Animatable from 'react-native-animatable';

export function FadeOutHOC(Component) {

  return class extends React.Component {
    handleViewRef = ref => this.view = ref;

    /*
    componentDidUpdate(prevProps) {
      console.log(this.props.render);
      if (prevProps.render !== this.props.render) {
        if(this.props.render === false) {
          this.view.fadeOut().then(endState => {
            if ( endState.finished ) {
              this.props.onFinished()
            }
          });
        }
      }
    };
    */

    render() {

      const {
        render,
        inAnimation = 'fadeIn',
        outAnimation = 'fadeOut',
        easing = null,
        animation = null,
        duration = 300
      } = this.props;

      let animationType = render ? inAnimation : outAnimation

      return (
        <Animatable.View 
          ref={this.handleViewRef}
          animation={animationType}
          easing={"ease-in-out-back"}
          duration={200}>
          {Component}
        </Animatable.View>
      );
    }
  }

}