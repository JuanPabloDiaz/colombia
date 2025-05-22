import React, { useEffect, useState } from "react";

const ImageChecker = ({ imageUrl, imageId, imageName, children }) => {
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch(imageUrl)
      .then((res) => {
        if (isMounted) setImageExists(res.ok);
      })
      .catch(() => {
        if (isMounted) setImageExists(false);
      });
    return () => { isMounted = false; };
  }, [imageUrl]);

  // Clone children and inject imageFailed prop
  return React.Children.map(children, child =>
    React.cloneElement(child, { imageFailed: !imageExists })
  );
};

export default ImageChecker;
