import type { PageData } from "@/types/docs";

import { pageData as variables } from "./variables/data";
import { pageData as formulaSyntax } from "./formula-syntax/data";
import { pageData as ruleTypes } from "./rule-types/data";
import { pageData as settingsReference } from "./settings-reference/data";
import { pageData as lockDurationsAndDailyReset } from "./lock-durations-and-daily-reset/data";
import { pageData as eventLog } from "./event-log/data";
import { pageData as templateReference } from "./template-reference/data";

/** All specification pages in sidebar display order. */
export const specPages: PageData[] = [
  variables,
  formulaSyntax,
  ruleTypes,
  settingsReference,
  lockDurationsAndDailyReset,
  eventLog,
  templateReference,
];
