const ErrorComponent = ({ imageId, imageName, imageUrl }) => {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-red-500/80 p-4 text-lg font-bold text-white">
      <div className="flex flex-col items-center">
        <h2 className="mb-4">Image failed to load</h2>
        <ul>
          <li>ID: {imageId}</li>
          <li>Name: {imageName}</li>
        </ul>
        <p>
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline hover:text-gray-500"
          >
            image URL
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
