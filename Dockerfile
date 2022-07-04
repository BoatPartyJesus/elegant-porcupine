FROM node:17.9.0-alpine AS builder
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

FROM node:17.9.0-alpine AS production
RUN adduser -D app
USER app

WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD ["node", "dist/main"]