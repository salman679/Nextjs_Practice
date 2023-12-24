// "use client";
import React from "react";
import { FaCalendarAlt, FaComment } from "react-icons/fa";

import "./style.css";
import Link from "next/link";

function BlogItem({ image, title, category, description }) {
  const dataServer = "http://127.0.0.1:8000";

  return (
    <div className="post-item">
      <Link href="#">
        <img
          className="img-fluid w-100"
          src={dataServer + "/" + image}
          alt="Rem culpa maiores a"
        />
      </Link>
      <h6>
        <Link href="#">{title}</Link>
      </h6>
      <div className="item-info">
        <div className="tag">
          <Link href="#">{category?.name}</Link>
        </div>
        <div className="calender">
          <FaCalendarAlt />
          <span>10 Dec 2023</span>
        </div>
        <div className="comment">
          <FaComment />
          <span>(03)</span>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
        <Link href="#">Read More</Link>
      </div>
    </div>
  );
}

export default BlogItem;
