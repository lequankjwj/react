import { MainLayout } from '@components/compound';
import InsightDetail from '@containers/Insights/Detail';
import withWrapper from '@hoc/withWrapperSSG';

const Index = (props: any) => <InsightDetail {...props} />;
export const getServerSideProps = withWrapper({ callback: () => null });
Index.Layout = MainLayout;
export default Index;
