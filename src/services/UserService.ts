// services/UserService.ts
import axios from '@/utils/request/axios';

export default class UserService {
  static async fetchUsers() {
    try {
      const response = await axios.get('/api/test');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  static async createUser(user: any) {
    try {
      const response = await axios.post('/users', user);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  }
}