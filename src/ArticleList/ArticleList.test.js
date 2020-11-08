
import React, { Component } from 'react';
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";
describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const articles1 = [
       {
            title : "A title",
            timeStamp: "2020-02-02",
            displayDate: "2020-02-03",
            slug: "slug1",


        },
        {
            title : "A title",
            timeStamp: "2020-02-02",
            displayDate: "2020-02-03",
            slug: "slug2",

        }
    ]
    const { container } = render(<ArticleList articles={articles1}/>);
    expect(container).toMatchSnapshot();
  });
});
