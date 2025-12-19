import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../util/cropUtils";

const ImageUpload = ({ onImageCropped, aspectRatio = 450 / 350 }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageData = await readFile(file);
      setImageSrc(imageData);
      setIsCropping(true);
    }
  };

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onImageCropped(croppedImage); 
      setIsCropping(false);
      setImageSrc(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="image-upload-container">
      {!isCropping ? (
        <input type="file" accept="image/*" onChange={onFileChange} />
      ) : (
        <div className="cropper-wrapper">
          <div
            className="crop-container"
            style={{ position: "relative", height: 300, background: "#333" }}
          >
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatio}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div
            className="controls"
            style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}
          >
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(e.target.value)}
            />
            <button
              type="button"
              className="button primary small"
              onClick={showCroppedImage}
            >
              Confirm Crop
            </button>
            <button
              type="button"
              className="button ghost small"
              onClick={() => {
                setIsCropping(false);
                setImageSrc(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
