// import { useState } from "react";
import { H1, H2, H3 } from "./components/ComponentWithCss/Headline"
import { Section } from "./components/ComponentWithCss/Section"

export const App = () => {
  return (
    <>
      <Section />
      <H1 heading="Anna" />
      <H2 heading="Gitte" />
      <H3 heading="Johanna" />
    </>
  )
}