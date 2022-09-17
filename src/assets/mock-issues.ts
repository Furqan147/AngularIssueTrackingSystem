import { Issue } from 'src/app/issue';

export const issues: Issue[] = [
  {
    id: 1,
    title:  'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: 'High',
    category: 'Feature'
  },
  {
    id: 2,
    title:  'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address in the customer list',
    priority: 'Low',
    category: 'Feature'
  },
  {
    id: 3,
    title:  'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: 'High',
    category: 'Bug'
  },
  {
    id: 4,
    title:  'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: 'Low',
    category: 'Feature'
  },
  {
    id: 5,
    title:  'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: 'High',
    category: 'Documentation'
  },
];
