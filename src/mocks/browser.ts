import type { SetupWorkerApi } from "msw";
import { setupWorker } from "msw";
import { handlers } from "@mocks/handlers";

export const worker: SetupWorkerApi = setupWorker(...handlers);
