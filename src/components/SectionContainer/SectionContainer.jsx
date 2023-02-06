import { Container, SectionTitle } from './SectionContainer.styled';

const SectionContainer = ({ title, children }) => {
  return (
    <Container>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </Container>
  );
};

export default SectionContainer;
