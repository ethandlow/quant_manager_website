import { guidePages } from "@/app/docs/guides/_pages";
import { specPages } from "@/app/docs/specifications/_pages";
import type { PageData } from "@/types/docs";

const docsSearchIndex: PageData[] = [...guidePages, ...specPages];

export default docsSearchIndex;
export type { PageData as SearchPage };
