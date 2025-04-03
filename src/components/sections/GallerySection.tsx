import { use, useState } from "react";
import "./GallerySection.css";

import img1 from "../../assets/Screenshot 2025-04-03 at 02.20.38.png";
import img2 from "../../assets/Screenshot 2025-04-03 at 02.21.01.png";
import img3 from "../../assets/Screenshot 2025-04-03 at 02.22.50.png";
import img4 from "../../assets/Screenshot 2025-04-03 at 02.23.01.png";
import img5 from "../../assets/Screenshot 2025-04-03 at 02.24.25.png";

const images = [img1, img2, img3, img4, img5];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            ></button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
