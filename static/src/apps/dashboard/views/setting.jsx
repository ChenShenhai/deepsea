import React from 'react';

class Setting extends React.Component {
  render () {
    return (
      <section className="dashboard-container">
        <section className="dashboard-left">
          <ul className="list-group">
            <li className="list-group-item">site setting</li>
            <li className="list-group-item">other setting</li>
          </ul>
        </section>
        <section className="dashboard-main">
          <h1>setting view</h1>
        </section>
      </section>
    )
  }
}

export default Setting;