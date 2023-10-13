import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Link,
  Image,
  Heading,
  Center,
  Stack,
} from "@chakra-ui/react";
import "../btnBorderAnim/btnBorderAnim.css";
import pic1 from "../../assets/pic1.png";
function Cardd() {
  return (
    <>
      <Card
        width="94vw"
        border="none"
        direction={{ base: "column", sm: "row" }}
      >
        <Image
          borderRadius="10px"
          objectFit="contain"
          width={{ base: "100%", sm: "45vw" }}
          src={pic1}
          alt="clothes ready to add the cart"
        />
        <Stack>
          <CardBody>
            <Center>
              <Heading size="md">My E-commerce website</Heading>
            </Center>

            <Text py="2">
              "Welcome to our online fashion paradise! Explore the latest trends
              and timeless classics in our e-commerce store dedicated to
              clothing. From chic dresses to comfortable casuals, we offer a
              curated collection for every style and occasion. Shop confidently
              with secure payments, hassle-free returns, and fast deliveries.
              Elevate your wardrobe today!"
            </Text>
          </CardBody>

          <CardFooter>
            <Link className="animeButton">View</Link>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default Cardd;
