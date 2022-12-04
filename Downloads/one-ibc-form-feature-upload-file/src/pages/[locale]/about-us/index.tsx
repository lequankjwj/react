import { MainLayout } from '@components/compound';
import AboutUS from '@containers/AboutUs';
import withWrapperSSG from '@hoc/withWrapperSSG';

const Index = (props: any) => <AboutUS {...props} />;

Index.Layout = MainLayout;
export default Index;
export const getServerSideProps = withWrapperSSG({ callback: () => null });
