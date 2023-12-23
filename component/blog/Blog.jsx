"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "./BlogItem";
import axios from "axios";

function Blog() {
  const [blogData, setBlogData] = useState({
    blog: [],
    link: [],
  });

  async function getData() {
    const response = await axios.get("http://127.0.0.1:8000/api/blogs");

    setBlogData({
      blog: response.data.data,
      link: response.data.links,
    });
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <div className="post-blog">
      <Row>
        {blogData.blog.map(function (item, index) {
          return (
            <Col className="col-md-6" key={index}>
              <BlogItem
                image={item.image}
                title={item.title}
                category={item.category}
                created_at={item.created_at}
                description={item.description}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Blog;
