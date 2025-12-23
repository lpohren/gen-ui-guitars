import GuitarRecommendation from './GuitarRecommendation'

export default function GuitarRecommendations({
  ids,
}: {
  ids: string[]
}) {
  if (!ids || ids.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
      {ids.map((id) => (
        <GuitarRecommendation key={id} id={id} />
      ))}
    </div>
  )
}

