import React, {Component} from 'react';
import { ListItem, Icon } from 'react-native-elements';


export default class MonthItem extends Component {
    render () {
        const icon = this.props.or ? 'plus' : 'minus';
        return (
            <ListItem
                leftIcon={{name: icon, type:'font-awesome', color:'#f50'}}
                hideChevron
                title={this.props.text}
                subtitle={this.props.$ + ' $'}
                badge={{ element: <Icon
                    raised
                    name='close'
                    type='font-awesome'
                    color='#f50'
                    onPress={this.props.removeItem(this.props.monthId, this.props.id)}
                /> }}
            />
        );
    }
}

