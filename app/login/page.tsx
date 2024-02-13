import { getServerSession } from 'next-auth';
import Form from './form';

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return <Form />;
}
