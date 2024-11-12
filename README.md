# Secure Session and Token Management in Node.js Express

This project is a Node.js Express application implementing secure session and token management, adhering to Clean Code principles and Domain-Driven Design (DDD). It leverages Redis (Amazon MemoryDB) for session storage, JWT for token-based authentication, and includes various security measures like CSRF protection, rate limiting, and HTTPS enforcement.

## Features
### Session Creation and Management
- Unique session IDs stored in Redis with associated user data.
- HTTP-only cookies for session IDs to prevent XSS attacks.
- Session expiration policies with sliding sessions for continuous activity.

### Token Management
- Short-lived JWT tokens for API access.
- Token refresh mechanism while the session is active.

### Security Measures
- CSRF protection using tokens stored in Redis.
- Rate limiting to mitigate brute-force attacks.
- Mandatory HTTPS for encrypted data transmission.

### Scalability
- Utilizes Redis (Amazon MemoryDB) for in-memory session storage.
- Connect-Redis integration with Express-Session middleware.

## Project Structure

```plaintext
- app.js
- config/
  - index.js
- controllers/
  - authController.js
  - userController.js
- middlewares/
  - authMiddleware.js
  - csrfProtection.js
  - rateLimiter.js
- models/
  - userModel.js
- routes/
  - auth.js
  - user.js
- services/
  - authService.js
  - userService.js
- utils/
  - jwtUtil.js
  - redisClient.js
- package.json
```

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- Redis instance (Amazon MemoryDB recommended)

## 