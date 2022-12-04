import { MainLayout } from '@components/compound';
import Insight from '@containers/Insights';
import withWrapper from '@hoc/withWrapperSSG';

const Index = (props: any) => <Insight {...props} />;
export const getServerSideProps = withWrapper({ callback: () => null });
Index.Layout = MainLayout;
export default Index;
