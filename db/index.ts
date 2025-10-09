import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
neonConfig.wsProxy = (host) => `${host}?sslmode=require`;
neonConfig.useSecureWebSocket = true;
neonConfig.pipelineConnect = false;

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });

export const db = drizzle({ client: pool });
