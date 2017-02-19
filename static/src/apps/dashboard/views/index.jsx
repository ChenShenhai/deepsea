import React from 'react';

class Index extends React.Component {
  render () {
    return (
      <section className="dashboard-container">
        <section className="dashboard-left">
          <ul className="list-group">
            <li className="list-group-item">index setting</li>
            <li className="list-group-item">other setting</li>
          </ul>
        </section>
        <section className="dashboard-main">
          <h1>index view</h1>
        </section>
      </section>
    )
  }
}

export default Index;