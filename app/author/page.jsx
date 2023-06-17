import AuthBanner from '../components/AuthBanner';
import Author from '../components/Author';
import RecForYou from '../components/RecForYou';
import Subscribe from '../components/Subscribe';

function AuthorPage() {
  return (
    <div>
      <AuthBanner />
      <Author />
      <Subscribe />
      <RecForYou />
    </div>
  );
}

export default AuthorPage;
