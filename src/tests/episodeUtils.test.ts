import { getEpisodeNumberIdFromUrl } from "../_components/utils/episodeUtils";
import { describe, it, expect } from "vitest";
describe("getEpisodeNumberIdFromUrl tests", () => {
  it("return the number from the end of the URL", () => {
    const result = getEpisodeNumberIdFromUrl("http://test.com/episode/123");
    expect(result).toBe(123);
  });

  it("return -1 if there is no number at the end of the URL", () => {
    const result = getEpisodeNumberIdFromUrl(
      "http://test.com/episode/123/something"
    );
    expect(result).toBe(-1);
  });
});
