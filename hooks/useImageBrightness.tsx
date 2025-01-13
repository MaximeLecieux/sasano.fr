"use client"
import { useState, useEffect } from "react";

const useImageBrightness = (imageUrl: string): boolean | null => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous"; // Pour éviter les problèmes CORS
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const { data } = imageData;

      let totalBrightness = 0;
      let pixelCount = 0;

      for (let i = 0; i < data.length; i += 4) {
        // Récupère les valeurs rouge, vert et bleu
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Calcule la luminosité relative (méthode standard)
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

        totalBrightness += brightness;
        pixelCount++;
      }

      // Luminosité moyenne
      const avgBrightness = totalBrightness / pixelCount;

      // Définir si c'est sombre
      setIsDark(avgBrightness < 128); // 128 est la limite entre clair et sombre
    };
  }, [imageUrl]);

  return isDark;
}

export default useImageBrightness