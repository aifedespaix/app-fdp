import {Injectable, EventEmitter} from '@angular/core';
import {ThemeApp} from '../theme-app';

@Injectable()
export class ThemeStorageService {
  static storageKey = 'app-theme';

  onThemeUpdate: EventEmitter<ThemeApp> = new EventEmitter<ThemeApp>();

  storeTheme(theme: ThemeApp) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = theme.name;
    } catch { }

    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeStorageService.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch { }
  }
}
