import { useNavigate } from '@tanstack/react-router'

import guitars from '../data/example-guitars'

export default function GuitarComparison({
  id1,
  id2,
}: {
  id1: string
  id2: string
}) {
  const navigate = useNavigate()
  const guitar1 = guitars.find((guitar) => guitar.id === +id1)
  const guitar2 = guitars.find((guitar) => guitar.id === +id2)

  if (!guitar1 || !guitar2) {
    return null
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-green-500/20 bg-stone-800/50">
      <div className="p-4 border-b border-green-500/10">
        <h3 className="text-xl font-semibold text-white text-center mb-2">
          Guitar Comparison
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Guitar 1 */}
        <div className="space-y-4">
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <img
              src={guitar1.image}
              alt={guitar1.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {guitar1.name}
            </h4>
            <p className="text-sm text-gray-300 mb-3">
              {guitar1.shortDescription}
            </p>
            <div className="space-y-2 mb-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-gray-400">Weight:</span>
                  <span className="ml-2 text-gray-200">{guitar1.weight} lbs</span>
                </div>
                <div>
                  <span className="text-gray-400">Strings:</span>
                  <span className="ml-2 text-gray-200">{guitar1.strings}</span>
                </div>
                <div>
                  <span className="text-gray-400">Tuners:</span>
                  <span className="ml-2 text-gray-200">{guitar1.tuners}</span>
                </div>
                <div>
                  <span className="text-gray-400">Nut:</span>
                  <span className="ml-2 text-gray-200">{guitar1.nut}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-400">Bridge:</span>
                  <span className="ml-2 text-gray-200">{guitar1.bridge}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xl font-bold text-emerald-400">
                ${guitar1.price}
              </div>
            </div>
            <button
              onClick={() => {
                navigate({
                  to: '/example/guitars/$guitarId',
                  params: { guitarId: guitar1.id.toString() },
                })
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Guitar 2 */}
        <div className="space-y-4">
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <img
              src={guitar2.image}
              alt={guitar2.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {guitar2.name}
            </h4>
            <p className="text-sm text-gray-300 mb-3">
              {guitar2.shortDescription}
            </p>
            <div className="space-y-2 mb-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-gray-400">Weight:</span>
                  <span className="ml-2 text-gray-200">{guitar2.weight} lbs</span>
                </div>
                <div>
                  <span className="text-gray-400">Strings:</span>
                  <span className="ml-2 text-gray-200">{guitar2.strings}</span>
                </div>
                <div>
                  <span className="text-gray-400">Tuners:</span>
                  <span className="ml-2 text-gray-200">{guitar2.tuners}</span>
                </div>
                <div>
                  <span className="text-gray-400">Nut:</span>
                  <span className="ml-2 text-gray-200">{guitar2.nut}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-400">Bridge:</span>
                  <span className="ml-2 text-gray-200">{guitar2.bridge}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xl font-bold text-emerald-400">
                ${guitar2.price}
              </div>
            </div>
            <button
              onClick={() => {
                navigate({
                  to: '/example/guitars/$guitarId',
                  params: { guitarId: guitar2.id.toString() },
                })
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* Comparison Summary */}
      <div className="p-4 border-t border-green-500/10 bg-stone-900/30">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Price Difference:</span>
              <span
                className={`ml-2 font-semibold ${
                  guitar1.price < guitar2.price
                    ? 'text-green-400'
                    : guitar1.price > guitar2.price
                      ? 'text-red-400'
                      : 'text-gray-300'
                }`}
              >
                {guitar1.price < guitar2.price
                  ? `$${guitar2.price - guitar1.price} less`
                  : guitar1.price > guitar2.price
                    ? `$${guitar1.price - guitar2.price} more`
                    : 'Same price'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-gray-400">Price Difference:</span>
              <span
                className={`ml-2 font-semibold ${
                  guitar2.price < guitar1.price
                    ? 'text-green-400'
                    : guitar2.price > guitar1.price
                      ? 'text-red-400'
                      : 'text-gray-300'
                }`}
              >
                {guitar2.price < guitar1.price
                  ? `$${guitar1.price - guitar2.price} less`
                  : guitar2.price > guitar1.price
                    ? `$${guitar2.price - guitar1.price} more`
                    : 'Same price'}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm pt-2 border-t border-green-500/5">
            <div>
              <span className="text-gray-400">Weight:</span>
              <span
                className={`ml-2 font-semibold ${
                  guitar1.weight < guitar2.weight
                    ? 'text-green-400'
                    : guitar1.weight > guitar2.weight
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                }`}
              >
                {guitar1.weight} lbs
                {guitar1.weight < guitar2.weight
                  ? ' (lighter)'
                  : guitar1.weight > guitar2.weight
                    ? ' (heavier)'
                    : ''}
              </span>
            </div>
            <div className="text-right">
              <span className="text-gray-400">Weight:</span>
              <span
                className={`ml-2 font-semibold ${
                  guitar2.weight < guitar1.weight
                    ? 'text-green-400'
                    : guitar2.weight > guitar1.weight
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                }`}
              >
                {guitar2.weight} lbs
                {guitar2.weight < guitar1.weight
                  ? ' (lighter)'
                  : guitar2.weight > guitar1.weight
                    ? ' (heavier)'
                    : ''}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Strings:</span>
              <span className="ml-2 text-gray-200">{guitar1.strings}</span>
            </div>
            <div className="text-right">
              <span className="text-gray-400">Strings:</span>
              <span className="ml-2 text-gray-200">{guitar2.strings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

