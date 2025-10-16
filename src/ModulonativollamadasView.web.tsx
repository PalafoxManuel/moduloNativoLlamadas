import * as React from 'react';

import { ModulonativollamadasViewProps } from './Modulonativollamadas.types';

export default function ModulonativollamadasView(props: ModulonativollamadasViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
