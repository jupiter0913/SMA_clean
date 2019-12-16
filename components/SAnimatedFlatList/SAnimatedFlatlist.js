import React from 'react'
import { 
  FlatList 
} from 'react-native';
import _ from "lodash";
import cloneDeep from "lodash/cloneDeep"
import isEqual from "lodash/isEqual"
import differenceBy from "lodash/differenceBy"
import unionBy from "lodash/unionBy"
import sortBy from "lodash/sortBy"
// import ListItem from './ListItem'
import { FadeOutHOC } from './FadeOutHOC'

export class SAnimatedFlatlist extends React.Component {
  state = {
    ctrlData: [],
    selected: new Map()
  }

  componentDidMount() {

    let ctrlData = cloneDeep(this.props.data).map((item, index) => ({
      ...item,
      render: true
    }))

    this.setState({
      ctrlData
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if(!isEqual(prevProps.data, this.props.data)) {

      let deleted = differenceBy(prevProps.data, this.props.data, 'key').map (item => {
        item.render = false;
        return item;
      });

      let newSelected = new Map(this.state.selected);
      deleted.map( x => {
        let render = this.state.selected.get(x.key);
        render = isNaN(render) ? true : render = !render;
        newSelected.set(x.key, render);
      });
      
      let ctrlData = unionBy(deleted, this.state.ctrlData, 'key');
      let sortedCtrlData = sortBy(ctrlData, 'key');

      //console.log(sortedCtrlData);
      //console.log(newSelected);
      //this.state.map()

      this.setState({
        ctrlData: sortedCtrlData,
        selected: newSelected
      })

      //console.log("********************")

      /*
      let ctrlData = cloneDeep(this.props.data).map((item, index) => ({
        key: item.key,
        value: item.value,
        render: true
      }))
  
      this.setState({
        ctrlData
      })
      */
    }

    /*
    const { items = [], id } = nextProps
    const { data = [] } = this.state
    const deleted = _.difference(data, items).map(item => {
      item._isDeleted = true
      return item
    })

    const newData = _.unionBy(items, deleted, id);
    this.setState({ refresh: !this.state.refresh, data: newData })
    */
  }

  /*
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps.items, this.state.data)
  }
  */

  render() {

    const {
      renderItem,
      keyExtractor,
      style,
      contentContainerStyle
    } = this.props

    const {
      ctrlData,
      //selected
    } = this.state;

    return (
      <FlatList
        data={ctrlData}
        keyExtractor={keyExtractor}
        //extraData={selected}
        style={style}
        //contentContainerStyle={contentContainerStyle}
        renderItem={({item, index, separators}) => {
          //console.log(item);
          let FadeOutComponent = FadeOutHOC(renderItem({item, index, separators}));
          return <FadeOutComponent
                    key={item.key} 
                    render={item.render} 
                    onFinished={()=>{}} />
        }} />
    )
  }
}