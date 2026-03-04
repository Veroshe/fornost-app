# Konfiguracja Google Analytics

## Jak skonfigurować Google Analytics dla strony Fornost

### 1. Utwórz konto Google Analytics

1. Przejdź do [Google Analytics](https://analytics.google.com/)
2. Zaloguj się swoim kontem Google
3. Kliknij "Start measuring" lub "Rozpocznij pomiar"
4. Utwórz nową właściwość (Property) dla strony fornost.pl
5. Wybierz Google Analytics 4 (GA4)

### 2. Uzyskaj Measurement ID

Po utworzeniu właściwości:

1. Przejdź do **Admin** (ikona koła zębatego w lewym dolnym rogu)
2. W kolumnie **Property** kliknij **Data Streams**
3. Kliknij swoją domenę (lub utwórz nowy stream dla strony)
4. Skopiuj **Measurement ID** - będzie w formacie `G-XXXXXXXXXX`

### 3. Dodaj Measurement ID do projektu

#### Opcja A: Plik .env (zalecane dla lokalnego developmentu)

1. Utwórz plik `.env` w głównym katalogu projektu:

   ```bash
   cp .env.example .env
   ```

2. Otwórz plik `.env` i wklej swój Measurement ID:

   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. Zrestartuj serwer deweloperski:
   ```bash
   npm run dev
   ```

#### Opcja B: Zmienna środowiskowa na serwerze produkcyjnym

Dla GitHub Pages lub innego hostingu, ustaw zmienną środowiskową `VITE_GA_MEASUREMENT_ID` w ustawieniach CI/CD.

**GitHub Actions (jeśli używasz):**

1. Przejdź do Settings → Secrets and variables → Actions
2. Dodaj nowy secret: `VITE_GA_MEASUREMENT_ID` z wartością `G-XXXXXXXXXX`
3. W pliku workflow użyj:
   ```yaml
   - name: Build
     env:
       VITE_GA_MEASUREMENT_ID: ${{ secrets.VITE_GA_MEASUREMENT_ID }}
     run: npm run build
   ```

### 4. Weryfikacja

Po wdrożeniu zmian:

1. Otwórz stronę w przeglądarce
2. Przejdź do Google Analytics → Realtime
3. Sprawdź, czy widzisz swoją wizytę w czasie rzeczywistym

### 5. Co jest śledzone

Aplikacja automatycznie śledzi:

- **Wyświetlenia stron** - każda zmiana URL-a w hash routerze
- **Ścieżka nawigacji** - pełna ścieżka z query params i hashem

#### Śledzone eventy:

1. **buy_ticket** (conversion) - Kliknięcie w przycisk "Kup bilet"
2. **newsletter_signup** (engagement) - Kliknięcie w przycisk zapisania się do newslettera
3. **gallery_view** (engagement) - Wyświetlenie konkretnej galerii (Przeprawa lub Piknik)
4. **social_click** (engagement) - Kliknięcie w link do social media (Facebook, Discord, Instagram)

Te eventy pozwolą Ci śledzić:
- Ile osób klika w przycisk kupna biletu (konwersja)
- Zainteresowanie newsletterem
- Które galerie są najpopularniejsze
- Które kanały social media przyciągają najwięcej uwagi

### 6. Dodatkowe eventy (opcjonalnie)

Możesz dodawać własne eventy, np.:

```typescript
import { event } from '@/utils/analytics';

// Przykład: śledzenie kliknięcia w przycisk zapisu na newsletter
event('newsletter_signup', 'engagement', 'Newsletter Banner');
```

### Troubleshooting

**Nie widzę żadnych danych w GA:**

- Sprawdź, czy Measurement ID jest poprawne
- Sprawdź konsolę przeglądarki - powinien być komunikat jeśli ID nie jest ustawione
- Upewnij się, że nie masz włączonego ad blockera
- Poczekaj kilka minut - dane mogą się pojawić z opóźnieniem

**Widzę warning w konsoli:**

```
Google Analytics Measurement ID is not set
```

To oznacza, że musisz ustawić `VITE_GA_MEASUREMENT_ID` w pliku `.env`.
