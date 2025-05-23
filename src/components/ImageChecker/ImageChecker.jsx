import React, { useEffect, useState } from "react";

const ImageChecker = ({ imageUrl, imageId, imageName, children }) => {
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    // Si no hay URL de imagen, marcar como fallida inmediatamente
    if (!imageUrl) {
      setImageExists(false);
      return;
    }

    let isMounted = true;
    
    // Crear un objeto Image para verificar si la imagen carga correctamente
    const img = new Image();
    
    img.onload = () => {
      if (isMounted) setImageExists(true);
    };
    
    img.onerror = () => {
      if (isMounted) setImageExists(false);
    };
    
    // Establecer la fuente de la imagen para iniciar la carga
    img.src = imageUrl;
    
    return () => {
      isMounted = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  // Clone children and inject imageFailed prop
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { imageFailed: !imageExists }),
  );
};

export default ImageChecker;
