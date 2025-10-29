'use client';

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

interface GalleryImage {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
}

interface SimpleGalleryProps {
    galleryID: string;
    images: GalleryImage[];
}

export default function SimpleGallery({ galleryID, images }: SimpleGalleryProps) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            lightbox = null as any;
        };
    }, [galleryID]);

    return (
        <div className="pswp-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id={galleryID}>
            {images.map((image, index) => (
                <a
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={galleryID + '-' + index}
                    target="_blank"
                    rel="noreferrer"
                    className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={image.thumbnailURL} 
                        alt="幼稚園での生活"
                        width={image.width}
                        height={image.height}
                        className="w-full h-auto object-cover block"
                    />
                </a>
            ))}
        </div>
    );
}
