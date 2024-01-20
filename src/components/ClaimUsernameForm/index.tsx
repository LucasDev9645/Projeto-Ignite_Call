import React from "react";
import { Form } from "./style";
import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

const ClaimUsernameForm = () => {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
};

export default ClaimUsernameForm;
