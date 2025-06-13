import Container from "../components/layout/container";
import Slider from "../components/slider";
import OurProducts from "../components/our-products";
import HowTo from "../components/howto";
import Counter from "../components/counter";
import Comparator from "../components/comparator";
import Contacts from "../components/contacts";
import Fondo from "../components/fondo";
import usePopup from "../hooks/usePopup";
import Popup from "../components/ui/Popup";

export async function getServerSideProps(ctx) {
  const { req, res, params } = ctx;
  const PORT = process.env.PORT ?? 3000;
  const baseurl = process.env.BASE_URL + ":" + PORT;

  let r = await fetch(baseurl + '/api/posts?where={"post_type":"slider"}');

  let sliders = r.status === 200 ? await r.json() : [];

  return {
    props: {
      sliders,
    },
  };
}

export default function Home({ sliders }) {
  const { isOpen, closePopup } = usePopup();

  return (
    <Container>
      {sliders.length > 0 && <Slider sliders={sliders} />}

      <Popup isOpen={isOpen} onClose={closePopup} />

      <Fondo />
      <OurProducts data={{ standalone: false }} />
      <HowTo />
      <Counter />
      <Comparator />
      <Contacts />
    </Container>
  );
}
