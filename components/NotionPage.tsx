import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

export const NotionPage = ({
  recordMap,
  rootPageId,
  previewImagesEnabled,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
  previewImagesEnabled: boolean;
}) => {
  if (!recordMap) {
    return null;
  }
  const Collection = dynamic(() =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    )
  );
  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        components={{
          nextImage: Image,
          nextLink: Link,
          Collection,
        }}
      />
    </>
  );
};
