import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <TypeAnimation
        sequence={[
          // Same String at the start will only be typed once, initially
          "Hey, I'm Abdurrazaq Khabbab",
          1000,
        ]}
        speed={50}
        // style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
      );
}

export default Introduction