import {ThemeStorageService} from './theme-storage.service';
import {Theme, ThemeApp} from '../theme-app';


const testStorageKey = ThemeStorageService.storageKey;
const testTheme: ThemeApp = {
    name: Theme.DARK,
    description: 'yoyoyoy',
    icon: 'home',
};

describe('ThemeStorage Service', () => {
  const service = new ThemeStorageService();
  const getCurrTheme = () => window.localStorage.getItem(testStorageKey);
  const secondTestTheme = {
    name: 'other-test-theme',
    description: 'yayayaya',
    icon: 'user',
  };

  beforeEach(() => {
    window.localStorage[testStorageKey] = testTheme.name;
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should set the current theme name', () => {
    expect(getCurrTheme()).toEqual(testTheme.name);
    service.storeTheme(secondTestTheme);
    expect(getCurrTheme()).toEqual(secondTestTheme.name);
  });

  it('should get the current theme name', () => {
    const theme = service.getStoredThemeName();
    expect(theme).toEqual(testTheme.name);
  });

  it('should clear the stored theme data', () => {
    expect(getCurrTheme()).not.toBeNull();
    service.clearStorage();
    expect(getCurrTheme()).toBeNull();
  });

  it('should emit an event when setTheme is called', () => {
    spyOn(service.onThemeUpdate, 'emit');
    service.storeTheme(secondTestTheme);
    expect(service.onThemeUpdate.emit).toHaveBeenCalled();
    expect(service.onThemeUpdate.emit).toHaveBeenCalledWith(secondTestTheme);
  });
});
