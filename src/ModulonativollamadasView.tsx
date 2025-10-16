import { requireNativeView } from 'expo';
import * as React from 'react';

import { ModulonativollamadasViewProps } from './Modulonativollamadas.types';

const NativeView: React.ComponentType<ModulonativollamadasViewProps> =
  requireNativeView('Modulonativollamadas');

export default function ModulonativollamadasView(props: ModulonativollamadasViewProps) {
  return <NativeView {...props} />;
}
