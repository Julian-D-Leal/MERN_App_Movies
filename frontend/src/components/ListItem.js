export default function ListItem({ movie }) {
    const im = btoa(movie.image.data.data);

    return (
      <article className="flex items-start space-x-6 p-6">
        <img src={'data:image/png;base64,'+im} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-200 truncate pr-20 ">{movie.name}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="ml-2 text-slate-400">
              <dt className="sr-only">Year</dt>
              <dd>{movie.date}</dd>
            </div>
            <div>
              <dt className="sr-only">Genre</dt>
              <dd className="flex items-center text-slate-400">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-400" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {movie.genres}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Runtime</dt>
              <dd className="flex items-center text-slate-400">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-400" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {movie.duration}
              </dd>
            </div>
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              <dd className="text-slate-400">{movie.actors}</dd>
            </div>
          </dl>
        </div>
      </article>
    )
  }