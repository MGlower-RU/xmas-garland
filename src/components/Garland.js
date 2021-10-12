export default function Garland({balls}) {
  const ballsArray = new Array(balls).fill('ball')

  return (
    <div className="garland__wrapper">
      {
        ballsArray.map((_, i) => {
          return (
            <div key={i} className="garland__garland-ball">
              <div className="garland__garland-ball__handler"></div>
              <div className="garland__garland-ball__circle"></div>
            </div>
          )
        })
      }
    </div>
  )
}