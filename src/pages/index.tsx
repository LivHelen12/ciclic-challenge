import { Simulator } from "../pages/Simulator";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

export function App() {
  return (
    <>
      <Layout>
        <Header.Root>
          <Header.Content>Ciclic</Header.Content>
        </Header.Root>
        <Simulator />
      </Layout>
    </>
  );
}
