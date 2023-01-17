import React, { Component } from 'react';
import logoLaak from '../images/laak.jpeg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className='flex-item-main'>
          <img src={logoLaak} alt='Theater Laak logo' />
        </div>
      </div>
    );
  }
}
export default Home;
