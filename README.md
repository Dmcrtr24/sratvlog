# 💩 sratvlog
Streams random log entries to the browser via SSE

<div align="center">
<img width="587" height="780" alt="demo" src="https://github.com/user-attachments/assets/e4a12502-2070-4a97-8d8b-49322169bc20" />
</div>

## Стек

- Node.js + Express — сервер, SSE endpoint
- Vanilla JS — фронт без фреймворков
- Render — хостинг

## Запуск

```bash
git clone https://github.com/Dmcrtr24/sratvlog
cd sratvlog
npm install
npm start
```

`http://localhost:3000`

## Эндпоинт
GET /sratlogami?speed=200

`speed` — интервал между событиями в мс, по умолчанию 500

Формат события:

```json
{
  "time": "2026-05-26T16:00:00.000Z",
  "level": "INFO",
  "message": "срём потоком данных #4217",
  "pid": 55
}
```

## Demo

https://sratvlog1.onrender.com
