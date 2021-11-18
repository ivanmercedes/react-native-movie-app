import React from "react";
import SkeletonContent from "react-native-skeleton-content";

const Skeleton = ({bones}) => {
  return (
    <SkeletonContent
      boneColor="#4b4949"
      highlightColor="#0c0c0c"
      containerStyle={{ flex: 1, width: `100%` }}
      layout={bones}
      isLoading={true}
    />
  );
};

export default Skeleton;
