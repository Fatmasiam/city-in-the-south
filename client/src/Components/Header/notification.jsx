import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

class Notification extends Component {
  state = {
    notification: {
      seen: [
        {
          title: 'hi',
          message: 'hi there!!!',
        },
      ],
      unSeen: [
        {
          title: 'Welcome',
          message: 'Welcome to my app',
        },
        {
          title: 'need your attension',
          message: 'we make a servey about customer opinions and suggestion',
        },
      ],
    },
  };

  render() {
    const {
      notification: { seen, unSeen },
    } = this.state;
    const status = unSeen.length > 0;

    return (
      <>
        {status ? (
          <Dropdown alignRight>
            <Dropdown.Toggle id="dropdown-basic" className="nav__dropdown">
              <i className="fas fa-bell fa-lg">
                <span className="notification-no">{unSeen.length}</span>
              </i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown__menu">
              {unSeen.map((item, index) => {
                return (
                  <Dropdown.Item
                    key={unSeen.indexOf(item)}
                    eventKey={index}
                    className="dropdown__item dropdown_item-unseen"
                  >
                    <p className="dropdown__item-title">{item.title}</p>
                    <p>{item.message}</p>
                  </Dropdown.Item>
                );
              })}

              {seen.map((item, index) => {
                return (
                  <Dropdown.Item
                    key={seen.indexOf(item)}
                    eventKey={index}
                    className="dropdown__item dropdown_item-seen"
                  >
                    <p className="dropdown__item-title">{item.title}</p>
                    <p>{item.message}</p>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <i className="far fa-bell fa-lg" />
        )}
      </>
    );
  }
}

export default Notification;
