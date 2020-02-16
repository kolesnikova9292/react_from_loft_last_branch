import React from "react";

function Header(props) {
  return (
    <div>
      jhgkjhgkj
      <div onClick={props.showMapEvent} id="my-map">
        Карта
      </div>
      <div onClick={props.showMapEvent} id="personal-area">
        Личный кабинет
      </div>
      <div onClick={props.showMapEvent} id="logout">
        Выйти
      </div>
    </div>
  );
}

//render() {
//return (<button onClick={this.props.handler}></button>);
// }

/*class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false
    };
    this.showMapEvent = this.showMapEvent.bind(this);
  }

  showMapEvent(e) {
    console.log(11111);
    this.setState({ showMap: true });
  }
  render() {
    return (
      <div>
        jhgkjhgkj
        <div onClick={this.showMapEvent}>Карта</div>
      </div>
    );
  }
}*/

//export default Header;
export { Header };
