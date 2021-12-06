import { getProviders } from "next-auth/react";

function login() {
  return (
    <div>
      <img
        className="w-52 mb-3"
        src="https://links.papareact.com/9xl"
        alt="spotify"
      />
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
