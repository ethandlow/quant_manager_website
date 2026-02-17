import type { PageData } from "@/types/docs";

import { pageData as quickstart } from "./quickstart/data";
import { pageData as customizingQuantManager } from "./customizing-quant-manager/data";
import { pageData as lockDurations } from "./lock-durations/data";
import { pageData as lockingAccounts } from "./locking-accounts/data";
import { pageData as navigatingTheToolbar } from "./navigating-the-toolbar/data";
import { pageData as timeout } from "./timeout/data";
import { pageData as hidingAccounts } from "./hiding-accounts/data";
import { pageData as editingAccounts } from "./editing-accounts/data";
import { pageData as templates } from "./templates/data";
import { pageData as formulas } from "./formulas/data";
import { pageData as eventLog } from "./event-log/data";
import { pageData as manualInstallationGuide } from "./manual-installation-guide/data";

/** All guide pages in sidebar display order. */
export const guidePages: PageData[] = [
  quickstart,
  manualInstallationGuide,
  customizingQuantManager,
  lockDurations,
  lockingAccounts,
  timeout,
  navigatingTheToolbar,
  hidingAccounts,
  editingAccounts,
  templates,
  formulas,
  eventLog,
];
