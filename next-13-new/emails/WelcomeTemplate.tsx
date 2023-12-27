import {
  Body,
  Container,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

export default function WelcomeTemplate() {
  return (
    <Html>
      <Preview>Welcome Abroad</Preview>
      <Tailwind>
        <Body className='bg-white'>
          <Container>
            <Text className='text-3xl font-bold'>Hello Ahsan</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
