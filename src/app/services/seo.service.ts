import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private schemaElId = 'schema-org';

  constructor(private title: Title, private meta: Meta) {}

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  setKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  setRobots(content = 'index,follow') {
    this.meta.updateTag({ name: 'robots', content });
  }

  /** JSON-LD schema.org */
  setSchema(schema: object | null) {
    const head = document.head;
    let el = document.getElementById(this.schemaElId) as HTMLScriptElement | null;

    if (!schema) {
      if (el) el.remove();
      return;
    }

    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = this.schemaElId;
      head.appendChild(el);
    }

    el.text = JSON.stringify(schema);
  }

  /** Helper rápido */
  setAll(opts: {
    title: string;
    description: string;
    keywords?: string;
    schema?: object | null;
    robots?: string;
  }) {
    this.setTitle(opts.title);
    this.setDescription(opts.description);
    this.setKeywords(opts.keywords ?? '');
    this.setRobots(opts.robots ?? 'index,follow');
    this.setSchema(opts.schema ?? null);
  }
}
