import React, { useEffect, useState } from "react";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";

const ImageChecker = ({ imageUrl, imageId, imageName, children }) => {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    fetch(imageUrl)
      .then((res) => {
        if (res.ok) {
          setImageExists(true);
        }
      })
      .catch((error) => {
        // console.error(
        //   `Fetch error for image with ID ${imageId} and name ${imageName}`,
        //   error.message,
        // );
        setImageExists(false);
      });
  }, [imageUrl, imageId, imageName]);

  return imageExists ? (
    children
  ) : (
    <ErrorComponent
      imageId={imageId}
      imageName={imageName}
      imageUrl={imageUrl}
    />
  );
};

export default ImageChecker;
