import { registerWebModule, NativeModule } from 'expo';

import { ModulonativollamadasModuleEvents } from './Modulonativollamadas.types';

class ModulonativollamadasModule extends NativeModule<ModulonativollamadasModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ModulonativollamadasModule, 'ModulonativollamadasModule');
