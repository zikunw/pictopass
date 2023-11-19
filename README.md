# PictoPass

PictoPass is a simple, symbol-based login system enhancing digital access for the functioning illiterate and non-native speakers. Secure, intuitive, inclusive.

Authors: [Zikun Wang](https://github.com/zikunw) (Frontend), [Alicja Mahr](https://github.com/braxton) (Backend), [Woo Zhong Han](https://github.com/hanwj100) (Frontend), [Daniel Oh](https://github.com/danoh07) (Backend)

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Redis](https://redis.io/topics/quickstart)

### Installing

1. Clone the repo
2. Copy `docker-compose.example.yml` to `docker-compose.yml`
3. Fill in the environment variables in `docker-compose.yml`. See [Environment Variables](#environment-variables) for more information.
4. Start the containers
   ```sh
   docker-compose up --build -d
   ```
5. Open the app in your browser at `http://localhost:80`

### Environment Variables

| Variable Name  | Description                                | Default Value |
| -------------- | ------------------------------------------ | ------------- |
| DATABASE_URL   | MongoDB connection string                  |               |
| SALT_ROUNDS    | Number of salt rounds for password hashing | 10            |
| REDIS_USERNAME | Redis username                             |               |
| REDIS_PASSWORD | Redis password                             |               |
| REDIS_DB       | Redis database ID                          |               |
| REDIS_URL      | Redis connection string                    |               |
| JWT_SECRET     | Secret for JWT signing                     |               |
| ADMIN_KEY      | Admin key for creating admin accounts      |               |
| PORT           | Port for the server to listen on           | 3000          |
| NODE_ENV       | Node environment                           | production    |

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Tailwind CSS](https://tailwindcss.com/)
