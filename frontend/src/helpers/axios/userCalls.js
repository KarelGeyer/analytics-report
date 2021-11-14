import { userInstance } from './axios';

export const getUsers = () => {
  return userInstance.get();
}

export const updateThisUser = (email, password, newPassword) => {
  return userInstance.patch('', {
    email: email,
    password: password,
    newPassword: newPassword
  });
}

export const deleteThisUser = (email, password) => {
  return userInstance.delete('', {
    data: {
      email: email,
      password: password
    }
  });
}