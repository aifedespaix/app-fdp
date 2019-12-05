import {Injectable, EventEmitter} from '@angular/core';
import {ITheme} from '../theme.interface';

@Injectable()
export class ThemeStorageService {
  static storageKey = 'app-theme';

  onThemeUpdate: EventEmitter<ITheme> = new EventEmitter<ITheme>();

  storeTheme(theme: ITheme) {
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
