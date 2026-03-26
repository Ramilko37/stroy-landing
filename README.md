# Stroy Landing + Local Strapi CMS

Лендинг на Next.js с локальной Strapi админкой для редактирования всех текстов.

## Что реализовано

- Все тексты лендинга вынесены в модель `landing-page` в Strapi.
- На фронте подключен runtime fetch из `GET /api/public/landing-content`.
- В `dev` фронт читает Strapi (`NEXT_PUBLIC_STRAPI_URL`).
- В `prod` (GitHub Pages) фронт использует встроенный fallback-контент и не делает запросы к `localhost`.
- В Strapi включен `Draft & Publish`.

## Структура

- `src/lib/landing-content.ts` - типы контента, fallback-данные, загрузка из CMS.
- `src/components/HomeClient.tsx` - загрузка CMS-контента и прокидывание в секции.
- `cms/` - Strapi v5 проект (контент-тип, компоненты, endpoint).
- `docker-compose.yml` - локальный запуск Strapi + PostgreSQL.

## Быстрый старт (локально)

### 1. Frontend env

```bash
cp .env.example .env.local
```

По умолчанию:

- `NEXT_PUBLIC_STRAPI_URL=http://localhost:1337`
- `NEXT_PUBLIC_ENABLE_CMS_IN_PROD=false`

### 2. CMS env

```bash
cp cms/.env.example cms/.env
```

### 3. Поднять Strapi + Postgres

```bash
pnpm cms:up
```

Проверка логов:

```bash
pnpm cms:logs
```

Strapi админка: [http://localhost:1337/admin](http://localhost:1337/admin)

При первом запуске создайте admin-пользователя. Затем откройте `Content Manager -> Landing Page`, внесите правки и нажмите `Publish`.

### 4. Запустить лендинг

```bash
pnpm dev
```

Лендинг: [http://localhost:3000](http://localhost:3000)

После `Publish` в Strapi обновите страницу лендинга - тексты подтянутся без правок кода.

## Публичный endpoint

`GET http://localhost:1337/api/public/landing-content`

- endpoint только на чтение,
- без авторизации,
- отдает опубликованную версию контента (published).

## Команды

```bash
pnpm dev          # frontend dev
pnpm build        # frontend build (static export)
pnpm lint         # frontend lint
pnpm cms:up       # поднять Strapi + Postgres
pnpm cms:logs     # логи CMS
pnpm cms:down     # остановить контейнеры
```

## Текущий production-режим

Сейчас проект остается статическим (`next export`) для GitHub Pages. Поэтому production-сайт использует fallback-тексты из кода, пока Strapi не будет вынесен на публичный хост (VPS/PaaS).

Когда появится публичный CMS URL:

1. Укажите публичный `NEXT_PUBLIC_STRAPI_URL`.
2. Включите `NEXT_PUBLIC_ENABLE_CMS_IN_PROD=true`.
