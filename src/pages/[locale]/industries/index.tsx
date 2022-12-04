import { MainLayout } from '@components/compound';
import Industries from '@containers/Industries';
import withWrapper from '@hoc/withWrapperSSG';

const Index = (props: any) => <Industries {...props} />;

export const getServerSideProps = withWrapper({ callback: () => null });
Index.Layout = MainLayout;
export default Index;
