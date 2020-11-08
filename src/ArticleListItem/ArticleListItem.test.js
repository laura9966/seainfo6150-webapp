import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";
describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const article1 = {

            title : "A title",
            timeStamp: "2020-02-02",
            displayDate: "2020-02-03"

    }
    const { container } = render(<ArticleListItem article={article1}/>);
    expect(container).toMatchSnapshot();
  });
});