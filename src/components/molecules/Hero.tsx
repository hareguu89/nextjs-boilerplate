import Image from "next/image";
import Atoms from "@components/Atoms";

const Hero = () => {
  return (
    <>
      <Atoms.Div as="section" textAlign="center" padding="8px">
        <Atoms.Div
          width="300px"
          height="300px"
          boxShadow="0 1px 8px rgba(0, 0, 0, 0.2)"
          borderRadius="50%"
          margin="auto"
          overflow="hidden"
        >
          <Image
            src="/images/coding-event.jpg"
            alt="An Image showing Max"
            width={300}
            height={300}
          />
        </Atoms.Div>
        <Atoms.Div as="h1" fontSize="3xl" margin="4px" color="white">
          Hi I am Max
        </Atoms.Div>
        <Atoms.Div
          as="p"
          fontSize="6px"
          color="gray-500"
          width="90%"
          maxWidth="40rem"
          margin="auto"
        >
          Blog abt web development - especially Frontend frameworks like React
          or Vue.
        </Atoms.Div>
      </Atoms.Div>
    </>
  );
};

export default Hero;
