import { useQuery } from 'react-query';
import remoteLogin from '../services/AuthService';

export function useLoginQuery(logindata) {
  return useQuery(['loginData', logindata], remoteLogin, {
    enabled: false, // Do not auto-execute the query
  });
}
