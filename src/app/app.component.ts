import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * The apps root component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Defines the applications default language.
   */
  private readonly defaultLanguage = 'en';

  /**
   * Constructor of AppComponent. Initializes translations.
   *
   * @param translateService  ]ngx-translate[
   */
  constructor(public translateService: TranslateService) {
    this.initializeTranslateService();
  }

  /**
   * Initializes the ngx-translate TranslationService. If the current browser language is supported the application
   * will be displayed in this language. If not the default language will be used as fallback.
   *
   * @private
   */
  private initializeTranslateService() {
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
  }
}
