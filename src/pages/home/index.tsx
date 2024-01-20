import Image from "next/image";
import { Heading, Text } from "@ignite-ui/react";

import previewImage from "../../assets/app_preview.png";

import { Container, Hero, Preview } from "./style";
import ClaimUsernameForm from "@/src/components/ClaimUsernameForm";

const Home = () => {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento Descomplicado
        </Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  );
};

export default Home;
