import { InjectionToken } from '@angular/core';

export const GREETING = new InjectionToken<string>('GREETING');

export const MESSAGE = new InjectionToken<string>('MESSAGE');

export const PLUGINS = new InjectionToken<string[]>('PLUGINS');
