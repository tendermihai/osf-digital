import React from "react";
import { render, screen } from "@testing-library/react";
import VideoComponent from "./VideoComponent";
import "@testing-library/jest-dom/extend-expect";

test("renders YouTube video", () => {
  render(<VideoComponent />);
  const videoElement = screen.getByTestId("youtube-video");
  expect(videoElement).toBeInTheDocument();
});
