import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import guitars from '../../../data/example-guitars'

export const Route = createFileRoute('/example/guitars/')({
  component: GuitarsListPage,
})

function GuitarsListPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Guitar Collection</h1>
        <p className="text-gray-400">
          Browse our collection of unique and handcrafted guitars
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {guitars.map((guitar) => (
          <Link
            key={guitar.id}
            to="/example/guitars/$guitarId"
            params={{ guitarId: guitar.id.toString() }}
            className="group rounded-lg overflow-hidden border border-green-500/20 bg-stone-800/50 hover:border-green-500/40 transition-all hover:shadow-lg hover:shadow-green-500/10"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={guitar.image}
                alt={guitar.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                {guitar.name}
              </h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                {guitar.shortDescription}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-emerald-400">
                  ${guitar.price}
                </div>
                <div className="text-xs text-gray-400">
                  {guitar.strings} strings
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

