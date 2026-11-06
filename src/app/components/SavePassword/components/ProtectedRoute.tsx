import { useSelector } from 'react-redux';

import { RootState } from '../../../commonStore';
import { Role } from '../types';

export const ProtectedRoute = ({ accessRoles }: { accessRoles: Role[] }) => {
  const {} = useSelector((store: RootState) => store.user);
  return null;
};
