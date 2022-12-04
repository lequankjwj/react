import { MainLayout } from '@components/compound';
import MakeAnEnquiry from '@containers/MakeAnEnquiry';
import withWrapper from '@hoc/withWrapperSSG';

const Index = (props: any) => <MakeAnEnquiry {...props} />;
export const getServerSideProps = withWrapper({ callback: () => null });
Index.Layout = MainLayout;
export default Index;
