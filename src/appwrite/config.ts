import { Client, Account, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('http://localhost:8080/v1')
  .setProject('64eab886f296776feeda');
export const account = new Account(client);