# Transloco i18n Implementation Guide

## Overview
This project uses **Transloco** for internationalization (i18n) with support for English (en) and French (fr).

## Features Implemented
- ✅ Global translations (common.json)
- ✅ Per-module scoped translations (dashboard.json)
- ✅ Language switcher in header component with flag emojis
- ✅ No function calls in templates (only pipes)

## File Structure
```
src/
├── app/
│   ├── transloco-loader.ts              # Main loader for common translations
│   ├── app.module.ts                    # Transloco configured here
│   ├── components/
│   │   └── header/
│   │       └── header.component.*       # Language switcher UI
│   └── features/
│       └── dashboard/
│           └── dashboard.module.ts      # Scoped translations example
└── assets/
    └── i18n/
        ├── en/                          # English translations
        │   ├── common.json              # Global translations
        │   └── dashboard.json           # Dashboard-specific
        └── fr/                          # French translations
            ├── common.json
            └── dashboard.json
```

## Using Translations in Templates

### Global translations (from common.json)
```html
<!-- Access with 'common.' prefix -->
<h1>{{ 'common.header.title' | transloco }}</h1>
<button>{{ 'common.actions.save' | transloco }}</button>
```

### Scoped translations (module-specific)
```html
<!-- Access directly without prefix in scoped modules -->
<h2>{{ 'dashboard.title' | transloco }}</h2>
<p>{{ 'dashboard.welcome' | transloco }}</p>
```

### With attributes
```html
<input [placeholder]="'common.messages.loading' | transloco" />
<button [title]="'common.actions.edit' | transloco">Edit</button>
```

## Adding a New Module with Translations

### 1. Create translation files
Create `src/assets/i18n/en/your-module.json` and `src/assets/i18n/fr/your-module.json`:

```json
// en/your-module.json
{
  "title": "Your Module Title",
  "description": "Module description"
}
```

### 2. Configure the module
In your `your-module.module.ts`:

```typescript
import { provideTranslocoScope, TranslocoModule } from '@jsverse/transloco';

@NgModule({
  imports: [
    // ... other imports
    TranslocoModule,
  ],
  providers: [
    provideTranslocoScope({
      scope: 'your-module',
      loader: {
        en: () => import('../../../assets/i18n/en/your-module.json'),
        fr: () => import('../../../assets/i18n/fr/your-module.json')
      }
    })
  ]
})
export class YourModule { }
```

### 3. Use in templates
```html
<h1>{{ 'your-module.title' | transloco }}</h1>
```

## Language Switcher

The language switcher is in the header component and uses:
- 🇬🇧 Flag emoji for English
- 🇫🇷 Flag emoji for French

Users can click flags to switch languages. The active language is highlighted with:
- Full opacity (100%)
- Slightly larger scale (110%)

## Available Languages
- **en** (English) - Default
- **fr** (Français)

## Adding a New Language

1. Add language code to `app.module.ts`:
```typescript
availableLangs: ['en', 'fr', 'de'], // Add 'de' for German
```

2. Create directory: `src/assets/i18n/de/`

3. Add translation files: `common.json`, `dashboard.json`, etc.

4. Add flag button in `header.component.html`:
```html
<button 
  class="language-btn" 
  [class.active]="currentLang === 'de'"
  (click)="switchLanguage('de')"
  title="Deutsch"
  type="button">
  🇩🇪
</button>
```

## Best Practices

### ✅ DO
- Use the transloco pipe in templates: `{{ 'key' | transloco }}`
- Keep translation keys descriptive: `dashboard.statistics.totalProjects`
- Provide both EN and FR translations for all keys
- Use common.json for app-wide strings
- Use scoped translations for feature-specific content

### ❌ DON'T
- Call translation functions directly in templates (use pipes only)
- Hardcode strings in templates
- Forget to add translations for new features
- Mix scoped and common keys in the same namespace

## Testing Translations
1. Start the dev server: `npm start`
2. Navigate to any page
3. Click the flag buttons in the header
4. Verify content switches between English and French

## Troubleshooting

### Translations not loading
- Check that JSON files are in the correct directory
- Verify file names match the language codes (en, fr)
- Check browser console for 404 errors

### Missing translations show keys
- Add the missing key to both en and fr JSON files
- Restart the dev server

### Scoped translations not working
- Ensure `provideTranslocoScope` is in module providers
- Check that TranslocoModule is imported in the module
- Verify JSON import paths are correct
