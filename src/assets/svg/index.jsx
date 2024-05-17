import React from 'react';

const importIcon = (name) => {
    return React.lazy(() => import(`./${name}.svg?react`))
}

const Icon = ({ name, ...rest }) => {
  const IconComponent = importIcon(name);

  if (!IconComponent) {
    return null;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IconComponent {...rest} />
    </React.Suspense>
  );
};

export default  Icon;