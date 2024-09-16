export default interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  birth?: Date;
  roleId: number;
  shiftId?: number;
  userInfo?: {
    phone: string;
    email: string;
    street: string;
    number: number;
    complement?: string;
    zipCode: string;
    city: string;
    state: string;
  };
}
