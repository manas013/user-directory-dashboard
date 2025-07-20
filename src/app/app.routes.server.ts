import type { ServerRoute } from '@angular/ssr';
import { RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender, // use enum member
  },
  {
    path: 'user/:id',
    renderMode: RenderMode.Server, // use enum member
  },
];
