import moment from 'moment';

export const Greeting = () => {
  const currentHour = moment().hour();

  const greet = () => {
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good Morning!';
    } else if (currentHour < 18) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }
    return greeting;
  };

  const greeting = greet();

  return greeting;
};
