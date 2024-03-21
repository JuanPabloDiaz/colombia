const ErrorComponent = ({ imageId, imageName, imageUrl }) => {
  return (
    <main className="flex h-full w-full items-center justify-center rounded-xl bg-red-500/80 p-4 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Error</h1>
        <h2 className="mb-4 text-lg font-bold">Image failed to load</h2>
        <ul className="list-inside list-disc">
          <li>ID: {imageId}</li>
          <li>Name: {imageName}</li>
          <li>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-gray-500"
            >
              image URL
            </a>
          </li>
        </ul>
        <article className="pt-3">
          <p className="mt-4 text-sm">Posible solutions:</p>
          <ul className="list-inside list-disc">
            <li>
              <a
                href="https://www.youtube.com/watch?v=Odqih2oSmig"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black/60 underline hover:text-gray-500"
              >
                CORS error solution
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/cors"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black/60 underline hover:text-gray-500"
              >
                npm install cors
              </a>
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
};

export default ErrorComponent;
