import React from 'react'

const ShowCard = React.createClass({
  render () {
    const { poster, title, year, description } = this.props.show
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`}
        />
        <div>
          <h3>{title}</h3>
          <h3>({year})</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
