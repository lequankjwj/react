import { MainLayout } from '@components/compound';
import IndustriesDetail from '@containers/Industries/Detail';
import withWrapper from '@hoc/withWrapperSSG';

const Index = (props: any) => <IndustriesDetail {...props} />;

export const getServerSideProps = withWrapper({ callback: () => null });
Index.Layout = MainLayout;
export default Index;
