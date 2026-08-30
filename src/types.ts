import type { ReactNode } from 'react';

/** The article panels rendered inside <Main />. */
export type ArticleName = 'intro' | 'work' | 'about' | 'contact' | '';

/**
 * Shared shape for every article panel. These used to arrive via a `{...props}`
 * spread of Main's entire prop bag; they are now passed explicitly.
 */
export interface ArticleProps {
  /** Which article is currently selected. */
  article: ArticleName;
  /** Drives the CSS `timeout` class that runs the panel's fade animation. */
  articleTimeout: boolean;
  /** The shared close button element. */
  close: ReactNode;
}

/** An entry in either the "Previous Companies" or "Projects" grid. */
export interface WorkItem {
  id: number;
  name: string;
  link: string;
  image: string;
  description: string;
  tech: string[];
  /** Optional link to the source repository. */
  code?: string;
}
