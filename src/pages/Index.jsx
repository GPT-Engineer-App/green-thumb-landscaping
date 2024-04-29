import { Box, Container, Heading, Text, Button, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaTree, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={2}>
          Green Thumb Landscaping
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Creating beautiful gardens and landscapes
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
        <ServiceCard icon={FaTree} title="Landscape Design" description="Expert designs to transform your outdoor spaces into a natural paradise." />
        <ServiceCard icon={FaRegCalendarAlt} title="Regular Maintenance" description="Scheduled garden care to keep your property looking perfect all year round." />
        <ServiceCard icon={FaPhoneAlt} title="Consultation Services" description="Professional advice to help you achieve your landscaping goals." />
      </SimpleGrid>

      <Box textAlign="center" py={10}>
        <Button colorScheme="green" size="lg" leftIcon={<FaPhoneAlt />}>
          Contact Us
        </Button>
      </Box>

      <Box py={10}>
        <Image src="https://images.unsplash.com/photo-1514539079130-25950c84af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE0Mzc1OTU2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
      </Box>
    </Container>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <VStack bg="green.100" p={5} borderRadius="lg" boxShadow="md">
      <Icon size="3em" />
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

export default Index;
