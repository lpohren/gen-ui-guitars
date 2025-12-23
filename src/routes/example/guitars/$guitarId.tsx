import { createFileRoute, Link, notFound } from '@tanstack/react-router'

import guitars from '../../../data/example-guitars'

export const Route = createFileRoute('/example/guitars/$guitarId')({
  component: GuitarDetailPage,
  loader: ({ params }) => {
    const guitar = guitars.find((g) => g.id === +params.guitarId)
    if (!guitar) {
      throw notFound()
    }
    return { guitar }
  },
})

function GuitarDetailPage() {
  const { guitar } = Route.useLoaderData()

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link
        to="/example/guitars"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Guitars
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg border border-green-500/20 bg-stone-800/50">
          <img
            src={guitar.image}
            alt={guitar.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">{guitar.name}</h1>
            <div className="text-3xl font-bold text-emerald-400 mb-4">
              ${guitar.price}
            </div>
            <p className="text-gray-300 leading-relaxed">{guitar.description}</p>
          </div>

          {/* Specifications */}
          <div className="border-t border-green-500/20 pt-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Specifications
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-800/50 rounded-lg p-4 border border-green-500/10">
                <div className="text-sm text-gray-400 mb-1">Weight</div>
                <div className="text-lg font-semibold text-white">
                  {guitar.weight} lbs
                </div>
              </div>
              <div className="bg-stone-800/50 rounded-lg p-4 border border-green-500/10">
                <div className="text-sm text-gray-400 mb-1">Strings</div>
                <div className="text-lg font-semibold text-white">
                  {guitar.strings}
                </div>
              </div>
              <div className="bg-stone-800/50 rounded-lg p-4 border border-green-500/10">
                <div className="text-sm text-gray-400 mb-1">Tuners</div>
                <div className="text-lg font-semibold text-white">
                  {guitar.tuners}
                </div>
              </div>
              <div className="bg-stone-800/50 rounded-lg p-4 border border-green-500/10">
                <div className="text-sm text-gray-400 mb-1">Nut</div>
                <div className="text-lg font-semibold text-white">
                  {guitar.nut}
                </div>
              </div>
              <div className="bg-stone-800/50 rounded-lg p-4 border border-green-500/10 col-span-2">
                <div className="text-sm text-gray-400 mb-1">Bridge</div>
                <div className="text-lg font-semibold text-white">
                  {guitar.bridge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

