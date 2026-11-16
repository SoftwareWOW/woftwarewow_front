'use client';

import type { DivisionImageMap } from '@/lib/strapi/types/division-landing';
import { createContext, useContext, type ReactNode } from 'react';
import { resolveLandingImage } from './resolve-landing-image';

const DivisionLandingImageContext = createContext<DivisionImageMap | undefined>(undefined);

export function DivisionLandingImageProvider({
  imageMap,
  children,
}: {
  imageMap?: DivisionImageMap;
  children: ReactNode;
}) {
  return (
    <DivisionLandingImageContext.Provider value={imageMap}>
      {children}
    </DivisionLandingImageContext.Provider>
  );
}

export function useDivisionLandingImages(): DivisionImageMap | undefined {
  return useContext(DivisionLandingImageContext);
}

export function useLandingImage(sectionKey: string, index: number, fallback: string): string {
  const map = useDivisionLandingImages();
  return resolveLandingImage(map, sectionKey, index, fallback);
}