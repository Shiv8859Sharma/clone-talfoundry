import React from 'react';

export const ImportIcon = (name, folderName, outSide) => {
  if(outSide){
    return React.lazy(() => import(`${outSide}/${folderName}/${name}.svg?react`))
  }
  if (folderName) {
    return React.lazy(() => import(`./${folderName}/${name}.svg?react`))
  }
  return React.lazy(() => import(`./${name}.svg?react`))
}
const Icon = ({ folderName, name, outSide, ...rest }) => {
  const IconComponent = ImportIcon(name, folderName, outSide);
  if (!IconComponent) {
    return null;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IconComponent {...rest} />
    </React.Suspense>
  );
};

export default Icon;