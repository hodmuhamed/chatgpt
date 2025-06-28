# Blog CMS Skeleton

## Backend
- Node.js + Express server in `backend/server.js`.
- Prisma schema in `backend/prisma/schema.prisma` for MySQL.
- Start API with `node backend/server.js` (needs `express` and `prisma` packages).

## Frontend
- Next.js pages in `frontend/pages`.
- Start with `npm run dev` inside `frontend` after installing `next`, `react`, `react-dom`, `swr`.

## Database
- Set `DATABASE_URL` in `.env` for MySQL connection.
- Run `npx prisma migrate dev` in `backend` to create tables.

## Features
- `/api/posts` returns array of posts (placeholder).
- `/api/posts/:slug` returns a single post.
- `/api/login` uses fixed credentials and returns token.

This repository only shows a minimal structure; extend as needed.
