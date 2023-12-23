import Blog from "@/component/blog/Blog";
import Header from "@/component/header/Header";
import BannerSlider from "@/component/slider/Slider";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSlider />
      <main className="post p-5">
        <Container>
          <Row>
            {/* blog post  */}
            <Col className="col-lg-8">
              <Blog />
            </Col>
            <Col className="col-lg-4"></Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
