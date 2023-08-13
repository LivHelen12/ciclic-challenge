import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import AppRoutes from "../routes";

export function App() {
  return (
    <>
      <Layout>
        <Header.Root>
          <Header.Content>Ciclic</Header.Content>
        </Header.Root>
        <AppRoutes />
      </Layout>
    </>
  );
}
