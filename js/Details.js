import React from 'react'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string
    })
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div className='details'>
        <header>
          <h1>sVIDEO</h1>
        </header>
        <section>
          <h1>{title}</h1>
          <h1>({year})</h1>
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />

      </div>
    )
  }
})

export default Details
