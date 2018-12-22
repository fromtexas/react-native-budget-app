import React, { PureComponent } from "react";
import { Icon } from "react-native-elements";
import { View, Text, Animated, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { SCREEN_WIDTH } from "../constants";

class ListItemRound extends PureComponent {
  state = {
    fontLoaded: false,
    moved: false,
    scale: new Animated.Value(0)
  };

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
  }

  moveLeft = () => {
    const { moved } = this.state;

    Animated.spring(this.position, {
      toValue: {
        x: moved ? 0 : -180,
        y: 0
      }
    }).start();

    Animated.spring(this.state.scale, {
      toValue: moved ? 0 : 1,
      duration: 800
    }).start();

    this.setState({ moved: !moved });
  };

  render() {
    return (
      <Animated.View style={[this.position.getLayout(), styles.wrap]}>
        <View style={styles.container}>
          <Icon
            size={30}
            containerStyle={styles.iconLeft}
            name="plus"
            type="font-awesome"
            color="#ff6666"
            onPress={this.props.addMore}
          />

          <View style={styles.textContainer}>
            <Text style={{ fontSize: 20, color: "#555" }}>
              {this.props.date}
            </Text>
            <Text style={{ fontSize: 16, color: "#555" }}>
              {"Incomes: $" + this.props.incomes}
            </Text>
            <Text style={{ fontSize: 16, color: "#e03e3e" }}>{`Costs: $${
              this.props.costs
            }/${this.props.percent}%`}</Text>
          </View>

          <Icon
            size={30}
            containerStyle={styles.iconRight}
            name={this.state.moved ? "undo" : "cog"}
            type="font-awesome"
            color="#fff"
            onPress={this.moveLeft}
          />
        </View>
        <Animated.View style={{ transform: [{ scale: this.state.scale }] }}>
          <Icon
            size={30}
            containerStyle={styles.iconBehind}
            name="list-ul"
            type="font-awesome"
            color="#fff"
            onPress={this.props.showList}
          />
        </Animated.View>
        <Animated.View style={{ transform: [{ scale: this.state.scale }] }}>
          <Icon
            size={30}
            containerStyle={[styles.iconBehind]}
            name="times"
            type="font-awesome"
            color="#fff"
            onPress={this.props.remove}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}

ListItemRound.propTypes = {
  remove: PropTypes.func,
  showList: PropTypes.func,
  addMore: PropTypes.func,
  incomes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  const: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5
  },
  container: {
    width: SCREEN_WIDTH - 10,
    borderRadius: 50,
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    height: 80
  },
  textContainer: {
    justifyContent: "center"
  },
  iconLeft: {
    borderRadius: 50,
    width: 80
  },
  iconRight: {
    borderRadius: 50,
    height: 80,
    width: 80,
    backgroundColor: "#ff6666"
  },
  iconBehind: {
    marginLeft: 10,
    borderRadius: 50,
    height: 80,
    width: 80,
    backgroundColor: "#ff6666"
  }
});

export default ListItemRound;
