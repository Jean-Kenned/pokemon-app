import { cleanup } from "detox";
import * as adapter from "detox/runners/jest/adapter";

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});