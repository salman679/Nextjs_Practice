"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import BlogItem from "./BlogItem";
import axios from "axios";

function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [pageNo, setPageNo] = useState(2);
  const [lastPage, setLastPage] = useState(0);

  const dataServer = "http://127.0.0.1:8000/api/blogs";

  async function getData(url = dataServer) {
    try {
      const response = await axios.get(url);
      setBlogData([...blogData, ...response.data.data]);
      setLastPage(response.data.last_page);
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(function () {
    getData();
  }, []);

  let loadHandler = () => {
    setPageNo(pageNo + 1);
    let nextUrl = `http://127.0.0.1:8000/api/blogs?page=${pageNo}`;
    getData(nextUrl);
  };

  return (
    <div className="post-blog">
      <Row>
        {blogData?.map(function (item, index) {
          return (
            <Col className="col-md-6" key={index}>
              <BlogItem {...item} />
            </Col>
          );
        })}
      </Row>
      <Toaster />
      <div className="text-center">
        {pageNo <= lastPage ? (
          <Button
            type="button"
            onClick={loadHandler}
            className="btn btn-success"
          >
            Lode More
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Blog;
