import styles from './data'
import StyleCard from './components/StyleCard'

function App() {
  return (
    <div className="page">
      <div className="header">
        <div className="header-top">
          <span>Est. 2025</span>
          <span>The Style Gazette</span>
          <span>Vol. I · No. 1</span>
        </div>
        <h1 className="header-title">
          Street &amp; <em>Prep</em> Dispatch
        </h1>
        <hr className="header-line" />
        <p className="header-subtitle">
          "All the looks fit to wear" · A community style board
        </p>
      </div>

      <p className="section-label">📌 Pinned — 10 Community Styles</p>

      <main className="card-grid">
        {styles.map((item) => (
          <StyleCard
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            vibe={item.vibe}
            keyPieces={item.keyPieces}
            colors={item.colors}
            inspo={item.inspo}
            image={item.image}
            link={item.link}
          />
        ))}
      </main>
    </div>
  )
}

export default App