import React from "react";
import list from "../shared/Repolist";

const ToggleTable = (PassedComponent) =>
  class WithToggle extends React.Component {
    constructor(props) {
      super(props);
      this.handleShowMore = this.handleShowMore.bind(this);
      this.state = {
        toggleStatus: this.props.initialStatus,
        list: this.props.list,
        initialSize: this.props.initialSize,
      };
    }

    handleShowMore() {
      let listArr, toggleState;
      if (this.state.toggleStatus === "Show Less") {
        listArr = list.slice(0, this.state.initialSize);
        toggleState = "Show More";
      } else {
        listArr = list;
        toggleState = "Show Less";
      }
      this.setState({
        list: listArr,
        toggleStatus: toggleState,
      });
    }

    render() {
      return (
        <PassedComponent
          handleShowMore={this.handleShowMore}
          toggleStatus={this.state.toggleStatus}
          list={this.state.list}
        />
      );
    }
  };

export default ToggleTable;
