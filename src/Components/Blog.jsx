import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserDetail from "./UserDetail";
import PopularBlogs from "./PopularBlogs";
import Tags from "./Tags";
import BlogCard from "./BlogCard";
import blogdata from "../blogdata.json";

export default function Blog() {
  return (
    <Container fluid>
      <Row>
        {/* Left Column */}
        <Col sm={7}>
          {blogdata.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              imageSrc={blog.imageSrc}
              content={blog.content}
            />
          ))}
        </Col>

        {/* Right Column */}
        <Col sm={5}>
          <UserDetail tagkey={Tags.key}/>
          <PopularBlogs />
          <Tags />
        </Col>
      </Row>
    </Container>
  );
}
