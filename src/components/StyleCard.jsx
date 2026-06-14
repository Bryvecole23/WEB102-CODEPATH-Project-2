function StyleCard({ id, name, category, vibe, keyPieces, colors, inspo, image, link }) {

    const imagePosition = {
      1: 'top center',
      2: '20% center',
      3: 'center center',
      4: '30% center',
      5: 'top center',
      6: '15% center',
      7: 'top center',
      8: 'top center',
      9: 'top center',
      10: 'top center',
    }
  
    const position = imagePosition[id] || 'top center'
  
    return (
      <div className="card">
        <div className="card-pin"></div>
        <div className="card-top-stripe"></div>
        <img
          className="card-image"
          src={image}
          alt={name}
          style={{ objectPosition: position }}
        />
        <div className="card-content">
          <p className="card-tag">{category}</p>
          <h2 className="card-title">{name}</h2>
          <hr className="card-divider" />
          <p className="card-vibe">"{vibe}"</p>
          <p className="card-detail"><strong>Key Pieces:</strong> {keyPieces}</p>
          <p className="card-detail"><strong>Colors:</strong> {colors}</p>
          <p className="card-detail"><strong>Inspo:</strong> {inspo}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
            Explore on Pinterest →
          </a>
        </div>
      </div>
    )
  }
  
  export default StyleCard