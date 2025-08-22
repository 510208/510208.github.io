"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  trigger?: React.ReactNode;
  className?: string;
}

export function ImageLightbox({
  images,
  initialIndex = 0,
  trigger,
}: ImageLightboxProps) {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [isZoomed, setIsZoomed] = React.useState(false);

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  }, [images.length]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  }, [images.length]);

  const toggleZoom = React.useCallback(() => {
    setIsZoomed((prev) => !prev);
  }, []);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (hasMultipleImages) goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          if (hasMultipleImages) goToNext();
          break;
        case "Escape":
          event.preventDefault();
          setOpen(false);
          break;
        case " ":
          event.preventDefault();
          toggleZoom();
          break;
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, hasMultipleImages, goToPrevious, goToNext, toggleZoom]);

  // Reset zoom when opening/closing
  React.useEffect(() => {
    if (!open) {
      setIsZoomed(false);
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/50 border-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Navigation buttons */}
          {hasMultipleImages && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>
            </>
          )}

          {/* Zoom button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 left-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={toggleZoom}
          >
            {isZoomed ? (
              <ZoomOut className="h-6 w-6" />
            ) : (
              <ZoomIn className="h-6 w-6" />
            )}
            <span className="sr-only">{isZoomed ? "Zoom out" : "Zoom in"}</span>
          </Button>

          {/* Image counter */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Main image */}
          <div className="relative h-full flex items-center justify-center p-8 text-transparent bg-transparent flex-col opacity-100 shadow-none w-full">
            <img
              src={currentImage || "/placeholder.svg"}
              alt={`Image ${currentIndex + 1} of ${images.length}`}
              className={cn(
                "transition-transform duration-300 cursor-pointer",
                isZoomed
                  ? "scale-150 max-w-full max-h-full object-contain"
                  : "max-w-full max-h-full object-contain"
              )}
              onClick={toggleZoom}
              crossOrigin="anonymous"
              style={{
                maxWidth: isZoomed ? "100%" : "min(100%, 100vw - 4rem)",
                maxHeight: isZoomed ? "100%" : "min(100%, 100vh - 4rem)",
              }}
            />
          </div>

          {/* Thumbnail strip for multiple images */}
          {hasMultipleImages && images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/50 p-2 rounded-lg max-w-md overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsZoomed(false);
                  }}
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden transition-all",
                    index === currentIndex
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  )}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Single image lightbox component for convenience
interface SingleImageLightboxProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
}

export function SingleImageLightbox({
  src,
  alt = "Image",
  className,
  imageClassName,
}: SingleImageLightboxProps) {
  const defaultTrigger = (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={cn(
        "cursor-pointer hover:opacity-90 transition-opacity",
        imageClassName
      )}
      crossOrigin="anonymous"
    />
  );

  return (
    <ImageLightbox
      images={[src]}
      trigger={defaultTrigger}
      className={className}
    />
  );
}
