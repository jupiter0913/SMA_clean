import React, {
  Component
} from 'react';

import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

import * as Animatable from 'react-native-animatable';


export class ExampleView extends Component {
  handleViewRef = ref => this.view = ref;

  bounce = () => {
    this.view.fadeIn().then( endState =>
      console.log(endState.finished ? 
        'bounce finished' : 
        'bounce cancelled')
    );
  };
  
  render() {
    return (
      <View style={style.container}>
        <TouchableWithoutFeedback onPress={this.bounce}>
          <Animatable.View  ref={this.handleViewRef}
                            easing={"ease-in-out-back"}
                            duration={3000}>

            <Text style={{ fontSize: 50 }}>Bounce me!</Text>

          </Animatable.View>
        </TouchableWithoutFeedback>
      </View>

    );
  }
}

export const style = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'lightblue'
  }
});