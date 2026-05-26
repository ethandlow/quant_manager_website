import { guidePages } from "@/app/docs/guides/_pages";
import type { PageData } from "@/types/docs";

const docsSearchIndex: PageData[] = [...guidePages];

export default docsSearchIndex;
export type { PageData as SearchPage };
