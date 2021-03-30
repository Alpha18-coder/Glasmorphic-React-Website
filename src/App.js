import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>

  );
}

export default App;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`