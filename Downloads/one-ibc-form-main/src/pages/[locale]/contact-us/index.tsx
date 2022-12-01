import { MainLayout } from '@components/compound';
import ContactUS from '@containers/ContacUs';
import withWrapper from '@hoc/withWrapperSSG';

const Index = (props: any) => <ContactUS {...props} />;

Index.Layout = MainLayout;
export default Index;

export const getServerSideProps = withWrapper({ callback: () => null });
