type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

type Env = {
	DB: D1Database;
  };

declare namespace App {
	interface Locals extends Runtime {}
}

declare module 'astro' {
	interface Locals extends Runtime<Env> {}
  }