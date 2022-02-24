import { saveClassMetadata, CONFIGURATION_KEY } from '../../index';

export interface IComponentInfo {
  component: any;
  enabledEnvironment?: string[];
}

export interface ResolveFilter {
  pattern: string | RegExp;
  filter: (module, filter, bindModule) => any;
  ignoreRequire?: boolean;
}

export interface InjectionConfigurationOptions {
  imports?: Array<string | IComponentInfo | { Configuration: any }>;
  importObjects?: Record<string, unknown>;
  importConfigs?:
    | Array<{ [environmentName: string]: Record<string, any> }>
    | Record<string, any>;
  namespace?: string;
  detectorOptions?: Record<string, any>;
  /**
   * @deprecated
   */
  conflictCheck?: boolean;
}

export function Configuration(
  options: InjectionConfigurationOptions = {}
): ClassDecorator {
  return (target: any) => {
    saveClassMetadata(CONFIGURATION_KEY, options, target);
  };
}
