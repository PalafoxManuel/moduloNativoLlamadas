import { NativeModule, requireNativeModule } from 'expo';

import { ModulonativollamadasModuleEvents } from './Modulonativollamadas.types';

declare class ModulonativollamadasModule extends NativeModule<ModulonativollamadasModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ModulonativollamadasModule>('Modulonativollamadas');
